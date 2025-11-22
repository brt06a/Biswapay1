import { pgTable, serial, varchar, timestamp, text, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Visitors table to track website visits
export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 255 }),
  planId: varchar("plan_id", { length: 50 }),
  planName: varchar("plan_name", { length: 100 }),
  amount: text("amount"),
  userAgent: text("user_agent"),
  referrer: text("referrer"),
  timestamp: timestamp("timestamp").defaultNow(),
  ipAddress: varchar("ip_address", { length: 50 }),
});

// Zod schemas for visitors
export const insertVisitorSchema = createInsertSchema(visitors).omit({
  id: true,
  timestamp: true,
});

export type InsertVisitor = z.infer<typeof insertVisitorSchema>;
export type Visitor = typeof visitors.$inferSelect;
