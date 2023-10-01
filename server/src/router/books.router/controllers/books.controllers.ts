import { Request, Response } from "express";
import BooksModel from "../../../models/books.models";

export function getBooks(req: Request, res: Response) {
  const booksModel = new BooksModel();

  booksModel
    .get()
    .then((books) => {
      res.json(books);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
