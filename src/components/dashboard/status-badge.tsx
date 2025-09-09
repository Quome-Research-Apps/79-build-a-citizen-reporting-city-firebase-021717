import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { IssueStatus } from "@/lib/types";

const statusStyles: Record<IssueStatus, string> = {
  Received: "bg-status-received/20 text-status-received border-status-received/30 hover:bg-status-received/30",
  Assigned: "bg-status-assigned/20 text-status-assigned border-status-assigned/30 hover:bg-status-assigned/30",
  "In Progress": "bg-status-in-progress/20 text-status-in-progress border-status-in-progress/30 hover:bg-status-in-progress/30",
  Completed: "bg-status-completed/20 text-status-completed border-status-completed/30 hover:bg-status-completed/30",
};

export function StatusBadge({ status }: { status: IssueStatus }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium capitalize transition-colors w-full justify-center",
        statusStyles[status]
      )}
    >
      {status}
    </Badge>
  );
}
