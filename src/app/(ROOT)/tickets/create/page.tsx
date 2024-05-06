"use client";
import React, { useState } from "react";
import { Label } from "~/components/ui/label";
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
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface TicketInput {
  title: string;
  description: string;
}

const Page = () => {
  const mutation = api.ticket.create.useMutation();
  const router = useRouter();
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const [ticketInput, setTicketInput] = useState<TicketInput>({
    title: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [id]: undefined,
    }));
    setTicketInput((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(
      {
        title: ticketInput.title,
        description: ticketInput.description,
      },
      {
        onSuccess: (res) => {
          router.push(`${res}`);
          router.refresh();
        },
        onError: (error) => {
          if (error.data?.zodError?.fieldErrors) {
            setErrors(error.data.zodError.fieldErrors);
          } else {
            console.error("An error occurred while creating the ticket");
          }
        },
      },
    );
  };

  return (
    <div className="flex w-full justify-center p-10">
      <form onSubmit={handleSubmit}>
        <Card className="w-[600px]">
          <CardHeader>
            <CardTitle>Ticket Details</CardTitle>
            <CardDescription>
              Please try to be as descriptive as possible on the ticket.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                className={cn("w-full", errors.title ? "border-red-500" : "")}
                value={ticketInput.title}
                onChange={handleInputChange}
              />
              {errors.title && (
                <span className="text-sm text-red-500">{errors.title}</span>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                className={cn(
                  "min-h-40",
                  errors.description ? "border-red-500" : "",
                )}
                value={ticketInput.description}
                onChange={handleInputChange}
              />
              {errors.description && (
                <span className="text-sm text-red-500">
                  {errors.description}
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-row-reverse">
            <Button type="submit" variant="default" className="self-e">
              Create Ticket
            </Button>
            <Button onClick={() => router.back()} variant="link">
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Page;
