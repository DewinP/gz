"use client";

import { useSession } from "@clerk/nextjs";
import type { inferRouterOutputs } from "@trpc/server";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import TicketBadge from "~/components/TicketBadge";
import { Badge } from "~/components/ui/badge";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  SelectValue,
  Select,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectItem,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { cn, formatTimeSince } from "~/lib/utils";
import type { AppRouter } from "~/server/api/root";

interface TicketBoardProps {
  allTickets: TicketType;
  isDashboard?: boolean;
  selectedTicketId?: string;
}

type TicketType =
  inferRouterOutputs<AppRouter>["ticket"]["getAllTicketsByUser"];

const TicketBoard = ({
  allTickets,
  selectedTicketId,
  isDashboard,
}: TicketBoardProps) => {
  const router = useRouter();
  const [filter, setFilter] = React.useState<TicketType[0]["status"] | "all">(
    "all",
  );
  const tickets = allTickets.filter((ticket) => {
    return filter === "all" || ticket.status === filter;
  });

  return (
    <div className="mx-auto h-[calc(100vh-100px)] w-full max-w-5xl flex-1 justify-center ">
      <div className="max-w-7xl justify-center">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">Tickets</h1>
          <div className="flex gap-2">
            <Select
              value={filter}
              onValueChange={(value) =>
                setFilter(value as TicketType[0]["status"] | "all")
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="backlog">Backlog</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="all">Show All</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-150px)] w-full ">
          {tickets.length === 0 && (
            <div className="flex justify-center">
              <h1>No tickets found</h1>
            </div>
          )}
          {tickets.length > 0 && (
            <div className="flex flex-col gap-2 p-4 pt-0">
              {tickets.map((ticket) => (
                <button
                  key={ticket.id}
                  onClick={() => {
                    if (isDashboard) {
                      router.push(`/dashboard?id=${ticket.id}`);
                    } else {
                      router.push(`/tickets/${ticket.id}`);
                    }
                  }}
                  className={cn(
                    "flex flex-col items-start gap-2 border bg-muted/20 p-3 text-left text-sm transition-all hover:bg-accent",
                    selectedTicketId === ticket.id ? "bg-accent" : "",
                  )}
                >
                  <div className="flex w-full flex-row justify-between sm:flex-col ">
                    <h1 className="bold line-clamp-2  font-bold">
                      {ticket.title}
                    </h1>
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="font-small text-xs text-muted-foreground">
                        {ticket.name}
                      </div>
                      <div className="flex items-center">
                        <Badge
                          className="whitespace-nowrap rounded-none"
                          variant="outline"
                        >
                          Ticket #{ticket.ticketDisplayId.toUpperCase()}
                        </Badge>
                        <TicketBadge status={ticket.status} />
                      </div>
                    </div>
                  </div>
                  <Separator />

                  <div className="text-md line-clamp-2">
                    {ticket.description}
                  </div>
                  <div className={cn("ml-auto text-xs")}>
                    <span className="text-for">Last updated:</span>{" "}
                    {formatTimeSince(ticket.updatedAt)}
                  </div>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default TicketBoard;
