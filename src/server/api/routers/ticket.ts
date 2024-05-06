import { currentUser } from "@clerk/nextjs/server";
import { desc } from "drizzle-orm";
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
    .input(
      z.object({
        description: z.string().min(1, {
          message: "Description of the ticket is required",
        }),
        title: z.string().min(1, {
          message: "Title of the ticket is required",
        }),
      }),
    )
    .mutation(async ({ ctx, input }): Promise<string> => {
      const res = await ctx.db
        .insert(tickets)
        .values({
          userId: ctx.auth.userId,
          description: input.description,
          email: ctx.auth.sessionClaims.email,
          name: ctx.auth.sessionClaims.full_name,
          title: input.title,
        })
        .returning();

      return res[0]!.id;
    }),

  getAllTicketsByUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await currentUser();
    const isAdmin = user?.privateMetadata.isAdmin;

    if (isAdmin) {
      return ctx.db.query.tickets.findMany({
        orderBy: [desc(tickets.createdAt)],
      });
    }

    return ctx.db.query.tickets.findMany({
      orderBy: [desc(tickets.createdAt)],
      where: (ticket, { eq }) => eq(ticket.userId, ctx.auth.userId),
    });
  }),
});
