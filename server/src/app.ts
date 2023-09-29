import express, { Express } from 'express';
import dotenv from 'dotenv';

import productsRouter from './router/products';

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

app.use(express.json());

app.use('/products', productsRouter);

export { app, port };