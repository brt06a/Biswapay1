import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static file serving is handled by the Vite setup
  const httpServer = createServer(app);
  return httpServer;
}
