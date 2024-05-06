"use client";

import { useSession } from "@clerk/nextjs";
import type { inferRouterOutputs } from "@trpc/server";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
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
import { cn } from "~/lib/utils";
import type { AppRouter } from "~/server/api/root";

interface TicketBoardProps {
  allTickets: TicketType;
}

type TicketType =
  inferRouterOutputs<AppRouter>["ticket"]["getAllTicketsByUser"];

const TicketBoard = ({ allTickets }: TicketBoardProps) => {
  const router = useRouter();
  const [filter, setFilter] = React.useState<TicketType[0]["status"]>("new");
  const tickets = allTickets.filter((ticket) => ticket.status === filter);
  if (!tickets.length) {
    return (
      <ScrollArea className="h-[calc(100vh-73px)] min-w-full p-8 text-center">
        <h1>No tickets found</h1>
        <Link href="/create">
          <Button className="mt-4">Submit a ticket</Button>
        </Link>
      </ScrollArea>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-lg font-bold">Tickets</h1>
        <div className="flex gap-2">
          <Select
            value={filter}
            onValueChange={(value) =>
              setFilter(value as TicketType[0]["status"])
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-150px)] w-full ">
        <div className="flex flex-col gap-2 p-4 pt-0">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() => {
                router.push(`/${ticket.id}`);
              }}
              className={cn(
                "flex flex-col items-start gap-2 border p-3 text-left text-sm transition-all hover:bg-accent",
                true && "bg-muted/60",
              )}
            >
              <div className="flex w-full justify-between">
                <h1 className="bold font-bold">{ticket.title}</h1>
                <Badge className="rounded-none">{ticket.status}</Badge>
              </div>
              <Separator />
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="font-small text-xs text-muted-foreground">
                    {ticket.name}
                  </div>
                  <div
                    className={cn("ml-auto text-xs", "text-muted-foreground")}
                  >
                    {new Date(ticket.createdAt).toLocaleDateString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className="text-md line-clamp-2 ">{ticket.description}</div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TicketBoard;
