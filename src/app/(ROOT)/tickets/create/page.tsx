import { Label } from "~/components/ui/label";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
const page = () => {
  return (
    <div className="flex w-full justify-center p-10">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Ticket Details</CardTitle>
          <CardDescription>
            Please try to be as descriptive as possible on the ticket.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" type="text" className="w-full" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" className="min-h-40" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className={cn("w-full")} variant="default">
            Create Ticket
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
