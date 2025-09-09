import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PublicRequestMap } from '@/components/public-request-map';
import { PlusCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Community Service Requests
          </h1>
          <p className="text-muted-foreground">
            View and report non-emergency issues in your neighborhood.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/report">
            <PlusCircle className="mr-2 h-5 w-5" />
            Report New Issue
          </Link>
        </Button>
      </div>
      <PublicRequestMap />
    </div>
  );
}
