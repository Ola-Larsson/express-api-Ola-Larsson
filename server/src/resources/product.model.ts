import Joi from "joi";
import { loadDataFromFile } from "./product.datahandler";

export interface Product {
  Id: number;
  Title: string;
  Description: string;
  Amount: number;
  Price: number;
}

export const productSchema = Joi.object<Product>({
  Title: Joi.string().min(1).required(),
  Description: Joi.string().required(),
  Amount: Joi.number().required(),
  Price: Joi.number().required(),
});

export const products: Product[] = loadDataFromFile();
