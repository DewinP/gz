import { ticketRouter } from "~/server/api/routers/ticket";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { commentRouter } from "~/server/api/routers/comment";

export const appRouter = createTRPCRouter({
  ticket: ticketRouter,
  comment: commentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
