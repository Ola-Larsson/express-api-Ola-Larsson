import { NextFunction, Request, Response } from "express";
import { productSchema } from "./product.model";

export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).json([]);
};

export const postProduct = (req: Request, res: Response) => {
  res.status(201).json({});
};

export const deleteProduct = (req: Request, res: Response) => {
  res.status(200).json(null);
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
