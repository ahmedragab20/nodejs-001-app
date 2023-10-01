// // WILL WORK ON THIS LATER

// import BooksModel from "./index";
// import { IBook } from "../../ts.types/index.d";
// import { mogoObjectId } from "../../helpers/uitls";

// describe("BooksModel", () => {
//   let booksModel: BooksModel;

//   beforeEach(() => {
//     booksModel = new BooksModel();
//   });

//   describe("get", () => {
//     it("should return an array of books", async () => {
//       const books = await booksModel.get();
//       expect(Array.isArray(books)).toBe(true);
//     });
//   });

//   describe("add", () => {
//     it("should add a book to the list of books", async () => {
//       const book: IBook = {
//         title: "Test Book",
//         author: "Test Author",
//         poster_url: "https://example.com/book.jpg",
//         rate: 5,
//         release_date: "19 May 2021",
//       };
//       await booksModel.add(book);
//       const books = await booksModel.get();
//       expect(books).toContainEqual(book);
//     });

//     it("should throw an error if the book is invalid", async () => {
//       const book: IBook = {
//         title: "Test Book",
//         author: "Test Author",
//         poster_url: "https://example.com/book.jpg",
//         rate: 5,
//         release_date: "19 May 2021",
//       };
//       await expect(booksModel.add(book)).rejects.toThrow("Invalid book");
//     });
//   });

//   describe("update", () => {
//     it("should update an existing book", async () => {
//       const book: IBook = {
//         _id: "123",
//         title: "Test Book",
//         author: "Test Author",
//         poster_url: "https://example.com/book.jpg",
//         rate: 5,
//         release_date: "19 May 2021",
//       };
//       await booksModel.add(book);
//       const updatedBook: IBook = {
//         _id: "123",
//         title: "Updated Test Book",
//         author: "Updated Test Author",
//         poster_url: "https://example.com/book2.jpg",
//         rate: 5,
//         release_date: "19 May 2021",
//       };
//       await booksModel.update(updatedBook);
//       const books = await booksModel.get();
//       expect(books).toContainEqual(updatedBook);
//     });

//     it("should throw an error if the book is invalid", async () => {
//       const book: IBook = {
//         _id: mogoObjectId(),
//         title: "Test Book",
//         author: "Test Author",
//         poster_url: "https://example.com/book.jpg",
//         rate: 5,
//         release_date: "19 May 2021",
//       };
//       await booksModel.add(book);
//       const updatedBook: IBook = {
//         _id: mogoObjectId(),
//         title: "Updated Test Book",
//         author: "Updated Test Author",
//         poster_url: "https://example.com/book2.jpg",
//         rate: 5,
//         release_date: "19 May 2021",
//       };
//       await expect(booksModel.update(updatedBook)).rejects.toThrow(
//         "Invalid book"
//       );
//     });

//     it("should throw an error if the book does not exist", async () => {
//       const book: IBook = {
//         _id: mogoObjectId(),
//         title: "Test Book",
//         author: "Test Author",
//         poster_url: "https://example.com/book.jpg",
//         rate: 5,
//         release_date: "19 May 2021",
//       };
//       const updatedBook: IBook = {
//         _id: mogoObjectId(),
//         title: "Updated Test Book",
//         author: "Updated Test Author",
//         poster_url: "https://example.com/book2.jpg",
//         rate: 5,
//         release_date: "19 May 2021",
//       };
//       await booksModel.add(book);
//       await expect(booksModel.update(updatedBook)).rejects.toThrow(
//         "Book not found"
//       );
//     });
//   });
// });
