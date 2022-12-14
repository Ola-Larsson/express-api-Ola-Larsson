import { NextFunction, Request, Response } from "express";
import { loadDataFromFile, saveDataToFile } from "./product.datahandler";
import {
  Product,
  products,
  productSchema,
  productSchemaWithId,
} from "./product.model";

export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).json(loadDataFromFile());
};

export const getProduct = (req: Request, res: Response) => {
  const productId = parseInt(req.params.Id);
  const foundProduct = loadDataFromFile().find(
    (product) => product.Id == productId
  );
  if (foundProduct) {
    res.status(200).json(foundProduct);
  } else {
    res.status(404).json("Resource not found");
  }
};

export const postProduct = (req: Request, res: Response) => {
  const productToCreate: Product = req.body;
  const product: Product = {
    Id: generateProductId(),
    Title: productToCreate.Title,
    Description: productToCreate.Description,
    Amount: productToCreate.Amount,
    Price: productToCreate.Price,
  };
  products.push(product);
  saveDataToFile(products);
  res.status(201).json(product);
};

export const deleteProduct = (req: Request, res: Response) => {
  const productId = parseInt(req.params.Id);
  const filteredProducts = loadDataFromFile().filter(function (product) {
    return product.Id != productId;
  });
  if (filteredProducts.length === loadDataFromFile().length) {
    res.status(404).json("Resource did not exist");
  } else {
    res.status(204).json(null);
    saveDataToFile(filteredProducts);
  }
};

export const updateProduct = (req: Request, res: Response) => {
  const updatedProduct: Product = req.body;
  const filteredProducts = loadDataFromFile().filter(function (product) {
    return product.Id != updatedProduct.Id;
  });
  if (filteredProducts.length === loadDataFromFile().length) {
    res.status(404).json("Resource does not exist");
  } else {
    filteredProducts.push(updatedProduct);
    filteredProducts.sort((a, b) => a.Id - b.Id);
    saveDataToFile(filteredProducts);
    res.status(200).json("Product updated successfully");
  }
};

export const validateNewProductBody = (
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

export const validateUpdatedProductBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = productSchemaWithId.validate(req.body);
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
