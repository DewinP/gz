import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { tickets } from "~/server/db/schema";

export const ticketRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ description: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(tickets).values({
        name: `${ctx.auth.user?.firstName} ${ctx.auth.user?.lastName}`,
        userId: ctx.auth.userId,
        email:
          ctx.auth.user?.emailAddresses[0]?.emailAddress ?? "not-set@500.com",
        description: input.description,
      });
    }),

  getAllTicketsByUser: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.auth.user?.privateMetadata.isAdmin) {
      return ctx.db.query.tickets.findMany();
    }

    return ctx.db.query.tickets.findMany({
      with: { userId: ctx.auth.userId },
    });
  }),
});
