import express from "express";

export const getAllProducts = (req, res) => {
  res.send("All products");
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
