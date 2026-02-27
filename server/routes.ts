import type { Express } from "express";
import { type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // No backend routes needed - this is a frontend-only portfolio
  // Contact form uses Web3Forms directly from the browser
  return httpServer;
}
