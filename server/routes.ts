import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPaymentSchema, insertSubscriptionSchema, insertUserSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Payment endpoints
  app.post("/api/payments", async (req, res) => {
    try {
      const { email, planId, amount, upiId } = req.body;

      // Get or create user
      let user = await storage.getUserByTelegramId(email);
      if (!user) {
        user = await storage.createUser({
          telegramId: email,
          email,
          name: email.split("@")[0],
        });
      }

      // Create payment record
      const payment = await storage.createPayment({
        userId: user.id,
        planId,
        amount,
        upiId,
        status: "pending",
      });

      res.json({ success: true, payment });
    } catch (error) {
      res.status(500).json({ error: "Failed to create payment" });
    }
  });

  // Subscription endpoints
  app.post("/api/subscriptions", async (req, res) => {
    try {
      const { email, planId, amount } = req.body;

      // Get or create user
      let user = await storage.getUserByTelegramId(email);
      if (!user) {
        user = await storage.createUser({
          telegramId: email,
          email,
          name: email.split("@")[0],
        });
      }

      // Create subscription
      const subscription = await storage.createSubscription({
        userId: user.id,
        planId,
        amount,
        status: "active",
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      });

      res.json({ success: true, subscription });
    } catch (error) {
      res.status(500).json({ error: "Failed to create subscription" });
    }
  });

  app.get("/api/subscriptions", async (req, res) => {
    try {
      const email = req.query.email as string;
      if (!email) {
        return res.status(400).json({ error: "Email required" });
      }

      const user = await storage.getUserByTelegramId(email);
      if (!user) {
        return res.json({ subscription: null });
      }

      const subscription = await storage.getActiveSubscriptionByUserId(user.id);
      res.json({
        subscription: subscription ? {
          planId: subscription.planId,
          planName: getPlanName(subscription.planId),
          amount: subscription.amount,
          status: subscription.status,
          startDate: subscription.startDate,
          expiryDate: subscription.expiryDate,
        } : null,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subscription" });
    }
  });

  // Admin endpoints
  app.get("/api/admin/payments", async (req, res) => {
    try {
      const payments = await storage.getAllPayments();
      res.json({ payments });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch payments" });
    }
  });

  app.get("/api/admin/subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getAllSubscriptions();
      res.json({ subscriptions });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subscriptions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function getPlanName(planId: string): string {
  const names: Record<string, string> = {
    basic: "Basic Plan",
    standard: "Standard Plan",
    pro: "Pro Plan",
    premium: "Premium Plan",
  };
  return names[planId] || planId;
}
