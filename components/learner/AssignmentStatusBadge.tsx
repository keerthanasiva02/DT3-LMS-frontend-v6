export default function AssignmentStatusBadge({ status }: { status: string }) {
    const map: any = {
      Pending: "bg-yellow-100 text-yellow-700",
      Submitted: "bg-teal-100 text-teal-700",
      Reviewed: "bg-green-100 text-green-700",
      Overdue: "bg-red-100 text-red-700",
    };
  
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${map[status]}`}>
        {status}
      </span>
    );
  }
  