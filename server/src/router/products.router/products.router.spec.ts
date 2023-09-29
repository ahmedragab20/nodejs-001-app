import supertest from "supertest";
import { app } from "../../app";

describe("Test GET /products", () => {
  it("should return 200 OK", async () => {
    const response = await supertest(app).get("/products");
    expect(response.status).toBe(200);
  });
  it("should return an array of products", async () => {
    const response = await supertest(app).get("/products");
    expect(response.body).toEqual([
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
      { id: 3, name: "Product 3", price: 30 },
    ]);
  });
});
