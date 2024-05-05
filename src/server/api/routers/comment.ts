import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { comments } from "~/server/db/schema";

export const commentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ body: z.string().min(1), ticketId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(comments).values({
        userId: ctx.auth.userId,
        body: input.body,
        ticketId: input.ticketId,
      });
    }),
});
