import React from "react";
import type { StatusType } from "~/components/CommentBox";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

const TicketBadge = ({ status }: { status: StatusType }) => {
  return (
    <Badge
      className={cn(
        "flex w-fit justify-center whitespace-nowrap rounded-none",

        status === "resolved"
          ? "bg-green-500"
          : status === "in-progress"
            ? "bg-yellow-500"
            : "",
      )}
    >
      {status}
    </Badge>
  );
};

export default TicketBadge;
