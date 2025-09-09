"use client";

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { mockIssues } from '@/lib/mock-data';
import type { Issue, IssueStatus } from '@/lib/types';
import { StatusBadge } from './status-badge';

export function IssuesTable() {
  const [issues, setIssues] = React.useState<Issue[]>(mockIssues);
  
  const handleStatusChange = (issueId: string, newStatus: IssueStatus) => {
    setIssues(prevIssues =>
      prevIssues.map(issue =>
        issue.id === issueId ? { ...issue, status: newStatus } : issue
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Service Requests</CardTitle>
        <CardDescription>View and manage all reported issues.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>AI Summary</TableHead>
                <TableHead>Reported At</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {issues.map(issue => (
                <TableRow key={issue.id}>
                  <TableCell className="font-medium">{issue.id}</TableCell>
                  <TableCell>{issue.category}</TableCell>
                  <TableCell className="max-w-xs truncate">{issue.summary || 'N/A'}</TableCell>
                  <TableCell>{new Date(issue.reportedAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Select
                      value={issue.status}
                      onValueChange={(newStatus: IssueStatus) =>
                        handleStatusChange(issue.id, newStatus)
                      }
                    >
                      <SelectTrigger className="w-[140px] p-0 border-none focus:ring-0">
                         <SelectValue asChild>
                           <StatusBadge status={issue.status} />
                         </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Received">Received</SelectItem>
                        <SelectItem value="Assigned">Assigned</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
