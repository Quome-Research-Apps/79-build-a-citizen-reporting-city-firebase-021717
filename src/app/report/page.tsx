import { IssueSubmissionForm } from '@/components/issue-submission-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function ReportIssuePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline">Report a New Issue</CardTitle>
            <CardDescription>
              Fill out the form below to report a non-emergency issue. Your report will be sent to the appropriate city department.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <IssueSubmissionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
