"use client";

import * as React from 'react';
import Image from 'next/image';
import { MapPin, X, Calendar, Tag, FileText } from 'lucide-react';
import { mockIssues } from '@/lib/mock-data';
import type { Issue, IssueStatus } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from './ui/separator';

const statusConfig: Record<
  IssueStatus,
  { color: string; description: string }
> = {
  Received: {
    color: 'bg-status-received',
    description: 'The issue has been received and is awaiting review.',
  },
  Assigned: {
    color: 'bg-status-assigned',
    description: 'The issue has been assigned to a department.',
  },
  'In Progress': {
    color: 'bg-status-in-progress',
    description: 'A team is actively working on resolving the issue.',
  },
  Completed: {
    color: 'bg-status-completed',
    description: 'The issue has been resolved.',
  },
};

export function PublicRequestMap() {
  const [selectedIssue, setSelectedIssue] = React.useState<Issue | null>(null);

  const handlePinClick = (issue: Issue) => {
    setSelectedIssue(issue);
  };

  const handleSheetClose = () => {
    setSelectedIssue(null);
  };

  return (
    <>
      <Card>
        <CardContent className="p-0">
          <div className="relative w-full h-[400px] md:h-[600px] bg-muted overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/1200/800"
              alt="City Map"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
              data-ai-hint="city map"
            />
            {mockIssues.map((issue) => (
              <button
                key={issue.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ top: issue.location.top, left: issue.location.left }}
                onClick={() => handlePinClick(issue)}
                aria-label={`View issue ${issue.id}`}
              >
                <MapPin
                  className={cn(
                    'h-8 w-8 drop-shadow-lg transition-transform duration-200 hover:scale-125',
                    {
                      'text-status-received': issue.status === 'Received',
                      'text-status-assigned': issue.status === 'Assigned',
                      'text-status-in-progress': issue.status === 'In Progress',
                      'text-status-completed': issue.status === 'Completed',
                    }
                  )}
                  fill="currentColor"
                />
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Sheet open={!!selectedIssue} onOpenChange={(open) => !open && handleSheetClose()}>
        <SheetContent className="w-full sm:max-w-md p-0">
          {selectedIssue && (
            <>
              <SheetHeader className="p-6">
                <SheetTitle className="flex items-center gap-2">
                  <div className={cn('w-3 h-3 rounded-full', statusConfig[selectedIssue.status].color)} />
                   Issue #{selectedIssue.id}
                </SheetTitle>
                <SheetDescription>
                  {statusConfig[selectedIssue.status].description}
                </SheetDescription>
                 <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>
              <Separator />
              <div className="p-6 space-y-4">
                {selectedIssue.imageUrl && (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                     <Image
                      src={selectedIssue.imageUrl}
                      alt={`Image for issue #${selectedIssue.id}`}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="issue report"
                    />
                  </div>
                )}
                <div className="space-y-4 text-sm">
                   <div className="flex items-start gap-3">
                      <Tag className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Category</span>
                        <Badge variant="secondary">{selectedIssue.category}</Badge>
                      </div>
                    </div>
                   <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">Description</span>
                        <p>{selectedIssue.description}</p>
                      </div>
                    </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Reported On</span>
                      <p>{new Date(selectedIssue.reportedAt).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
