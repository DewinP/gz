import { ScrollArea } from "~/components/ui/scroll-area";
import React from "react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { formatTimeSince } from "~/lib/utils";
import CommentBox from "~/components/CommentBox";
import { api } from "~/trpc/server";
import TicketBadge from "~/components/TicketBadge";
import { auth } from "@clerk/nextjs";
const TicketDisplay = async ({ ticketId }: { ticketId: string }) => {
  const ticket = await api.ticket.getTicketById(ticketId);
  const user = auth();

  if (!ticket) {
    return <div>404</div>;
  }

  return (
    <ScrollArea className=" h-screen w-full flex-col justify-center">
      <Card className="mx-auto max-w-7xl flex-col border-t-0">
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <div className="grid gap-1">
                <div className="flex gap-2">
                  <TicketBadge status={ticket.status} />
                  <div className="text-2xl font-bold">{ticket.title}</div>
                </div>
                <div className=" text-muted-foreground">{ticket.name}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-xs">Reply-To:</span> {ticket.email}
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-col items-center justify-center text-xs text-muted-foreground">
              <Badge className="rounded-none" variant="outline">
                Ticket #{ticket.ticketDisplayId.toUpperCase()}
              </Badge>
              <div className="text-center text-muted-foreground">
                {formatTimeSince(ticket.updatedAt)}
              </div>
            </div>
          </div>
          <Separator />
          <div className="p-4">
            <h1 className="text-muted-foreground">Ticket Description:</h1>
            <div className="p-4">{ticket.description}</div>
          </div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <CommentBox
              ticketId={ticket.id}
              ticketStatus={ticket.status}
              isAdmin={user.sessionClaims?.metadata.isAdmin}
            />
          </div>
        </div>
        {ticket.comments.length > 0 && (
          <div>
            <div className="flex w-full items-center justify-center">
              <div className="flex-1 border-t border-gray-300 dark:border-gray-700" />
              <div className="px-4 font-medium text-gray-500 dark:text-gray-400">
                Comments
              </div>
              <div className="flex-1 border-t border-gray-300 dark:border-gray-700" />
            </div>
            {ticket.comments.map((comment) => (
              <Card key={comment.id} className="m-8 flex flex-col gap-2 p-2">
                <div className="flex justify-between">
                  {comment.userId !== ticket.userId ? (
                    <div className="flex items-center ">
                      <Badge className="rounded-none" variant="destructive">
                        {comment.name}
                      </Badge>
                    </div>
                  ) : (
                    <Badge className="self-end rounded-none" variant="outline">
                      {comment.name}
                    </Badge>
                  )}
                  <div className="text-xs text-muted-foreground">
                    {formatTimeSince(comment.createdAt)}
                  </div>
                </div>

                <CardContent className="rounded-md bg-muted/60 p-2">
                  {comment.body}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Card>
    </ScrollArea>
  );
};

export default TicketDisplay;
