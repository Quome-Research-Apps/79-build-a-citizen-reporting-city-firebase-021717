import { EmployeeDashboard } from '@/components/employee-dashboard';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
       <div className="space-y-2 mb-6">
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Employee Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage and track citizen-reported service requests.
          </p>
        </div>
      <EmployeeDashboard />
    </div>
  );
}
