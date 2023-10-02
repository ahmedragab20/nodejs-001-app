import { Express } from "express";
import BooksRouter from "./books.router";
export default (app: Express) => {
  app.use("/books", BooksRouter);
};
