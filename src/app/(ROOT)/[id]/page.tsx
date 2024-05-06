import { Label } from "~/components/ui/label";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
const page = () => {
  return (
    <div className="flex w-full justify-center p-10">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Where is my subscription?</CardTitle>
        </CardHeader>
        <Separator />
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
