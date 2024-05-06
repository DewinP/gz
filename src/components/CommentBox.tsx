"use client";

import type { inferRouterOutputs } from "@trpc/server";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ChangeStatusSelect } from "~/components/ChangeStatusSelect";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { cn } from "~/lib/utils";
import type { AppRouter } from "~/server/api/root";
import { api } from "~/trpc/react";

export type StatusType =
  inferRouterOutputs<AppRouter>["ticket"]["getAllTicketsByUser"][0]["status"];

const CommentBox = ({
  ticketId,
  ticketStatus,
  isAdmin,
}: {
  ticketId: string;
  ticketStatus: StatusType;
  isAdmin?: boolean;
}) => {
  const router = useRouter();
  const [commentBody, setCommentBody] = React.useState("");

  const [errors, setErrors] = useState<{
    body?: string;
  }>({});

  const mutation = api.comment.create.useMutation({
    onSuccess: async () => {
      router.refresh();
      setCommentBody("");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(
      {
        ticketId,
        body: commentBody,
      },
      {
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
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <Textarea
          id="description"
          className={cn("p-4", errors.body ? "border-red-500" : "")}
          value={commentBody}
          onChange={(e) => {
            setCommentBody(e.target.value);
            setErrors((prev) => ({
              ...prev,
              body: undefined,
            }));
          }}
          placeholder={`Reply`}
        />
        {errors.body && (
          <span className="text-sm text-red-500">{errors.body}</span>
        )}
        <div className="flex items-center">
          {isAdmin && (
            <ChangeStatusSelect
              ticketStatus={ticketStatus}
              ticketId={ticketId}
            />
          )}
          <Button size="sm" className="ml-auto" type="submit">
            Post Comment
          </Button>
        </div>
      </div>
    </form>
  );
};
export default CommentBox;
