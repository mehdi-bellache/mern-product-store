import express from "express";
import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(StatusCodes.OK).json({ products });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal Server Error");
  }
};

export const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
    }
    res.status(StatusCodes.OK).json({ product });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal Server Error");
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const product = await Product.create({ name, price, image });
    res.status(StatusCodes.CREATED).json({ product });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal Server Error");
  }
};

export const updateProduct = (req, res) => {
  res.send("product updated");
};

export const deleteProduct = (req, res) => {
  res.send("product deleted");
};
