import React from "react";

import TicketItem from "~/components/TicketItem";
import TicketDisplay from "~/components/TicketDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Separator } from "~/components/ui/separator";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";

const page = () => {
  return (
    <main className="grid flex-1 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
      <div className="relative hidden w-full flex-col items-start rounded-xl  md:flex">
        <Tabs defaultValue="new" className="min-w-full">
          <div className="flex items-center p-4">
            <h1 className="text-xl font-bold">Tickets</h1>
            <TabsList className="ml-auto">
              <TabsTrigger
                value="new"
                className="text-zinc-600 dark:text-zinc-200"
              >
                New
              </TabsTrigger>
              <TabsTrigger
                value="in-progress"
                className="text-zinc-600 dark:text-zinc-200"
              >
                in progress
              </TabsTrigger>
              <TabsTrigger
                value="resolved"
                className="text-zinc-600 dark:text-zinc-200"
              >
                Resolved
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>
          <TabsContent value="new" className="m-0">
            <TicketItem flag />
          </TabsContent>
          <TabsContent value="in-progress" className="m-0">
            <TicketItem flag />
          </TabsContent>
          <TabsContent value="resolved" className="m-0">
            <TicketItem flag={false} />
          </TabsContent>
        </Tabs>
      </div>
      <div className="relative flex flex-col border border-t-0 bg-muted/20 lg:col-span-2">
        <TicketDisplay />
      </div>
    </main>
  );
};

export default page;
