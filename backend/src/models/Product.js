import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must provide a name"],
      trim: true,
      minLength: [3, "name can not be less than 3 characters"],
      maxLength: [25, "name can not be more than 25 characters"],
    },
    price: {
      type: Number,
      required: [true, "must provide a price"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "must provide an image url"],
      trim: true,
    },
  },
  { timestamps: true }, // createdAt updatedAt
);

const Product = mongoose.model("Product", productSchema);

export default Product;
