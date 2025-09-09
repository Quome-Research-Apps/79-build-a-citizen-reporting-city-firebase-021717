"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Overview } from '@/components/dashboard/overview';
import { IssuesTable } from '@/components/dashboard/issues-table';
import { LayoutDashboard, ListTodo } from 'lucide-react';

export function EmployeeDashboard() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="issues">
          <ListTodo className="mr-2 h-4 w-4" />
          All Issues
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Overview />
      </TabsContent>
      <TabsContent value="issues">
        <IssuesTable />
      </TabsContent>
    </Tabs>
  );
}
