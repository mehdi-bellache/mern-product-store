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

export const getProduct = (req, res) => {
  res.send("One product");
};

export const createProduct = (req, res) => {
  res.send("product created");
};

export const updateProduct = (req, res) => {
  res.send("product updated");
};

export const deleteProduct = (req, res) => {
  res.send("product deleted");
};
