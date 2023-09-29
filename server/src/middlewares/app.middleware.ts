import express, { Express } from 'express';

/**
 * Registers all app middlewares
 * @param app Express app
 * @returns void
 */
export default (app: Express) => {
  app.use(express.json());
}