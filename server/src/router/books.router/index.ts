import { Router } from "express";
import { getBooks } from "./controllers/books.controllers";

const router = Router();

router.get("/", getBooks);

export default router;
