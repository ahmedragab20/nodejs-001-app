import { mogoObjectId } from "../../helpers/uitls";
import { IBook } from "../../ts.types/index.d";
import { zBookSchema } from "../../zod.schemas/index";
import { MongoBooksModel } from "./mongo.model";


export default class BooksModel {
  private readonly books: IBook[] = [];

  async get() {
    try {
      return await MongoBooksModel.find();
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

      this.books.push(validatedBook.data);
      const newBook = new MongoBooksModel(validatedBook.data);
      return await newBook.save();
    } catch (error) {
      throw new Error("Error adding book");
    }
  }

  async remove(bookId: string) {
    try {
      const bookIndex = this.books.findIndex((b) => b._id === bookId);
      if (bookIndex === -1) {
        throw new Error("Book not found");
      }
      this.books.splice(bookIndex, 1);
      // update mongo
      return await MongoBooksModel.deleteOne({ _id: bookId });
    } catch (error) {
      throw new Error("Error deleting book");
    }
  }

  async update(book: IBook) {
    try {
      const validatedBook = zBookSchema.safeParse(book);

      if (!validatedBook.success) {
        throw new Error("Invalid book");
      }

      const bookIndex = this.books.findIndex((b) => b._id === book._id);
      if (bookIndex === -1) {
        throw new Error("Book not found");
      }
      this.books[bookIndex] = book;
      // update mongo
      return await MongoBooksModel.updateOne({ _id: book._id }, book);
    } catch (error) {
      throw new Error("Error updating book");
    }
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
