import Joi from "joi";

export interface Product {
  Id: Number;
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
