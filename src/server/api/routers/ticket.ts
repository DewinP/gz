import { TRPCError } from "@trpc/server";
import { desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { generateShortDisplayId } from "~/lib/utils";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { comments, tickets } from "~/server/db/schema";

export const ticketRouter = createTRPCRouter({
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
      const displayId = generateShortDisplayId();

      const res = await ctx.db
        .insert(tickets)
        .values({
          ticketDisplayId: displayId,
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
    const isAdmin = ctx.auth.sessionClaims.metadata.isAdmin;

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

  updateTicketStatus: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.enum(["in-progress", "resolved", "backlog"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!ctx.auth.sessionClaims.metadata.isAdmin) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to perform this action",
        });
      }

      const ticket = await ctx.db.query.tickets.findFirst({
        where: (ticket) => eq(ticket.id, input.id),
      });

      if (!ticket) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Ticket not found",
        });
      }

      await ctx.db
        .update(tickets)
        .set({
          status: input.status,
          updatedAt: sql`CURRENT_TIMESTAMP`,
        })
        .where(eq(tickets.id, input.id));

      return "Ticket updated";
    }),

  getTicketById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        const ticket = await ctx.db.query.tickets.findFirst({
          where: (ticket) => eq(ticket.id, input),
          with: {
            comments: {
              orderBy: [desc(comments.createdAt)],
            },
          },
        });
        return ticket;
      } catch (error) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Ticket not found",
        });
      }
    }),
});
