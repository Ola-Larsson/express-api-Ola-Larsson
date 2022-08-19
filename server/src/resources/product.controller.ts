import { Request, Response } from "express";

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
