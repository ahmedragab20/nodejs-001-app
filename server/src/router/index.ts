import { Express } from "express";
import productsRouter from "./products.router";
import { cpus, availableParallelism } from "node:os";
export default (app: Express) => {
  app.use("/products", productsRouter);

  app.get("/cpus", (request, response) => {
    const cpusDetails = cpus();

    response.json({
      cpusDetails,
    });
  });
};
