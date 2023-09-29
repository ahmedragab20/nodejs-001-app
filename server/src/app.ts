import express, { Express } from "express";
import dotenv from "dotenv";

import registerRouters from "./router";
import registerAppMiddleware from "./middlewares/app.middleware";
import registers from "./registers";
/**
 * Load environment variables from .env file
 */
const { parsed: env } = dotenv.config() || {};

/**
 * Server port
 * @type {number}
 * @default 4000
 */
const port: number = +process.env.PORT!;

/**
 * Express app
 * @type {Express}
 */
const app: Express = express();

registers(app, [registerAppMiddleware, registerRouters]);

export { app, port };
