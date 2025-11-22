import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { logVisitor } from "./supabase";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to log visitor
  app.post("/api/log-visitor", async (req, res) => {
    try {
      const { sessionId, planId, planName, amount, userAgent, referrer } =
        req.body;

      // Get IP address from request
      const ipAddress =
        (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
        req.socket.remoteAddress ||
        "unknown";

      const result = await logVisitor({
        sessionId,
        planId,
        planName,
        amount,
        userAgent: userAgent || "",
        referrer: referrer || "",
        ipAddress,
      });

      res.json({
        success: !!result,
        message: result
          ? "Visitor logged successfully"
          : "Failed to log visitor",
      });
    } catch (error) {
      console.error("Error in log-visitor endpoint:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Static file serving is handled by the Vite setup
  const httpServer = createServer(app);
  return httpServer;
}
