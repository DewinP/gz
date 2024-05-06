import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { comments } from "~/server/db/schema";

export const commentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        body: z.string().min(1, {
          message: "Comment body is required",
        }),
        ticketId: z.string().min(1, {
          message: "Ticket ID is required",
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(comments).values({
        userId: ctx.auth.userId,
        name: ctx.auth.sessionClaims.full_name,
        email: ctx.auth.sessionClaims.email,
        body: input.body,
        ticketId: input.ticketId,
      });
    }),
});
