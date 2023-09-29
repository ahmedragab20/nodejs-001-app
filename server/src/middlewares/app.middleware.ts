import express, { Express } from 'express';
import cors from "cors";
/**
 * Registers all app middlewares
 * @param app Express app
 * @returns void
 */
export default (app: Express) => {
  app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    "allowedHeaders": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  }));
  app.use(express.json());
}