import express from "express";
import {
  deleteProduct,
  getAllProducts,
  postProduct,
  updateProduct,
} from "./product.controller";

const productRouter = express.Router();
productRouter.post("/", postProduct);
productRouter.get("/", getAllProducts);
productRouter.put("/", updateProduct);
productRouter.delete("/", deleteProduct);

export default productRouter;
