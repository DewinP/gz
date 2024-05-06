import { sql } from "drizzle-orm";
import {
  pgEnum,
  pgTableCreator,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const createTable = pgTableCreator((name) => `gz_${name}`);

export const statusEnum = pgEnum("status", [
  "in-progress",
  "resolved",
  "backlog",
]);

export const tickets = createTable("ticket", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  name: varchar("name", { length: 64 }).notNull(),
  ticketDisplayId: varchar("ticket_display_id", { length: 12 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description").notNull(),
  userId: varchar("user_id", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().defaultNow().notNull(),
  status: statusEnum("status").default("backlog").notNull(),
});

export const comments = createTable("comment", {
  id: uuid("id").primaryKey().defaultRandom(),
  ticketId: uuid("ticket_id")
    .notNull()
    .references(() => tickets.id),
  name: varchar("name", { length: 64 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  userId: varchar("user_id", { length: 256 }).notNull(),
  body: varchar("comment").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const ticketsRelations = relations(tickets, ({ many }) => ({
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  ticket: one(tickets, {
    fields: [comments.ticketId],
    references: [tickets.id],
  }),
}));
