import { UserButton } from "@clerk/nextjs";
import { TicketIcon, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const SideBar = () => {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <div className="justify-center border-b p-4">
        <Button variant="outline" size="icon" aria-label="Home">
          Z
        </Button>
      </div>
      <nav className="grid gap-1 p-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/">
                <Button
                  className="rounded-lg"
                  variant="ghost"
                  size="icon"
                  aria-label="Tickets"
                >
                  <TicketIcon />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Tickets
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/tickets/create">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Models"
                >
                  <PlusCircle className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Create Ticket
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex justify-center pb-4">
        <UserButton />
      </nav>
    </aside>
  );
};

export default SideBar;
