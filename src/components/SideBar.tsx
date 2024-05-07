"use client";
import { TicketIcon, PlusCircle, LogOutIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const { signOut } = useClerk();
  const router = useRouter();

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
                  aria-label="Create Ticket"
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                size="icon"
                className="rounded-lg"
                onClick={async () => {
                  await signOut();
                  router.push("/sign-in");
                }}
              >
                <LogOutIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Logout
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default SideBar;
