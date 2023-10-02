import { IBook } from "../../ts.types/index.d";
import { zBookSchema } from "../../zod.schemas/index";
import { MongoBooksModel } from "./mongo.model";

export default class BooksModel {
  async get() {
    try {
      return await MongoBooksModel.find({});
    } catch (error) {
      throw new Error("Error getting books");
    }
  }

  async add(book: IBook) {
    try {
      const validatedBook = zBookSchema.safeParse(book);
      if (!validatedBook.success) {
        throw new Error("Invalid book");
      }

      const newBook = new MongoBooksModel(validatedBook.data);
      return await newBook.save();
    } catch (error) {
      throw new Error("Error adding book");
    }
  }

  async remove(bookId: string) {
    return "remove book: " + bookId;
  }

  async update(book: IBook) {
    return "update book: " + book;
  }

  async pick(bookId: string) {
    try {
      const book = await MongoBooksModel.findById(bookId);
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    } catch (error) {
      throw new Error("Error getting book");
    }
  }

  async searchBook(searchTerm: string) {
    try {
      const books = await MongoBooksModel.find({
        $or: [{ title: { $regex: searchTerm, $options: "i" } }],
      });
      if (!books) {
        throw new Error("Book not found");
      }

      return books;
    } catch (error) {
      throw new Error("Error getting book");
    }
  }
}
