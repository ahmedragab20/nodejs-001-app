import { Express, Router } from "express";
import booksRouter from "./books.router";
import { getBooks } from "./books.router/controllers/books.controllers";
export default (app: Express) => {
  const router = Router();

  // router.use("/books", booksRouter);

  app.get("/books", getBooks)
};
