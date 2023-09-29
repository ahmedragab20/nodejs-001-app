import { Express } from "express";
import productsRouter from "./products.router";

export default (app: Express) => {
  app.use("/products", productsRouter);
};
