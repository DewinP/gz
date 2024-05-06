import { useRouter } from "next/navigation";
import * as React from "react";
import type { StatusType } from "~/components/CommentBox";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/trpc/react";

export function ChangeStatusSelect({
  ticketId,
  ticketStatus,
}: {
  ticketId: string;
  ticketStatus: StatusType;
}) {
  const router = useRouter();

  const mutation = api.ticket.updateTicketStatus.useMutation({
    onSuccess: async () => {
      router.refresh();
      console.log(
        "We would normally send an email to the user here. But we're not going to do that in this example.",
      );
    },
  });

  const handleUpdateStatus = async (status: StatusType) => {
    if (status !== ticketStatus) {
      mutation.mutate({
        status,
        id: ticketId,
      });
    }
  };

  return (
    <Select
      value={ticketStatus}
      onValueChange={async (value: StatusType) => {
        await handleUpdateStatus(value);
      }}
    >
      <SelectTrigger className="w-[180px] bg-muted/100">
        <SelectValue placeholder="Change ticket status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Ticket Status:</SelectLabel>
          <SelectItem value="backlog">Backlog</SelectItem>
          <SelectItem value="in-progress">In progress</SelectItem>
          <SelectItem value="resolved">Resolved</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
