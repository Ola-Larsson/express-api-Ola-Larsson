import { NextFunction, Request, Response } from "express";
import { loadDataFromFile, saveDataToFile } from "./product.datahandler";
import { Product, products, productSchema } from "./product.model";

export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).json(loadDataFromFile());
};

export const postProduct = (req: Request, res: Response) => {
  const product: Product = req.body;
  product.Id = generateProductId();
  products.push(product);
  saveDataToFile(products);
  res.status(201).json(product);
};

export const deleteProduct = (req: Request, res: Response) => {
  const productId = parseInt(req.params.Id);
  console.log(productId);
  const filteredProducts = loadDataFromFile().filter(function (product) {
    return product.Id != productId;
  });
  saveDataToFile(filteredProducts);
  res.status(204).json(null);
};

export const updateProduct = (req: Request, res: Response) => {
  res.status(200).json([]);
};

export const validateProductBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = productSchema.validate(req.body);
  if (result.error) {
    res.status(400).json(result.error.message);
  } else {
    next();
  }
};

const generateProductId = function (): number {
  if (products.length < 1) {
    return 1;
  } else {
    return products[products.length - 1].Id + 1;
  }
};
