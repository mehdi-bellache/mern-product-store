import express from "express";

const app = express();

app.use(express.json());

import { getAllProducts } from "./controllers/productsController";

app.get("/api/v1/products", gettAllProduct);

app.get("/api/v1/products/:id", (req, res) => {
  res.send("One product");
});

app.post("/api/v1/products", (req, res) => {
  res.send("product created");
});

app.patch("/api/v1/products", (req, res) => {
  res.send("product updated");
});

app.delete("/api/v1/products/:id", (req, res) => {
  res.send("product deleted");
});

const port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});
