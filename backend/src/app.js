import "dotenv/config";
import express from "express";
import cors from "cors";

import productsRoutes from "./routes/productsRoutes.js";
import connectDB from "./db/connect.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.use("/api/v1/products", productsRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
