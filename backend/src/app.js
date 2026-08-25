import express from "express";
import productsRoutes from "./routes/productsRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/products", productsRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});
