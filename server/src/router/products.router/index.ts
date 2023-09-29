import express, { Request, Response } from "express";
const router = express.Router();

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

router.get("/", (req: Request, res: Response) => {
  res.json(products);
});

export default router;
