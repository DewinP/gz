import React from "react";
import { Badge } from "~/components/ui/badge";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

const TicketItem = ({ flag = false }: { flag: boolean }) => {
  if (!flag) {
    return (
      <ScrollArea className="h-[calc(100vh-73px)] min-w-full text-center">
        <h1>No tickets found</h1>
      </ScrollArea>
    );
  }

  return (
    <ScrollArea className="h-[calc(100vh-150px)] w-full ">
      <div className="flex flex-col gap-2 p-4 pt-0">
        <button
          className={cn(
            "flex flex-col items-start gap-2 border p-3 text-left text-sm transition-all hover:bg-accent",
            true && "bg-muted/60",
          )}
        >
          <div className="flex w-full justify-between">
            <h1 className="bold font-bold">Ticket # GZ-202432</h1>
            <Badge className="rounded-none">New</Badge>
          </div>
          <Separator />
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
        <button
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            // true && "bg-muted",
          )}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">John Doe</div>
                {/* {!item.read && (
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                )} */}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs",
                  true ? "text-foreground" : "text-muted-foreground",
                )}
              >
                some date
              </div>
            </div>
            <div className="text-xs font-medium">Where is my prescription?</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </button>
      </div>
    </ScrollArea>
  );
};

export default TicketItem;
