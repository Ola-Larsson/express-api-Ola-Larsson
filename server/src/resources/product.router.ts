import express from "express";
import {
  deleteProduct,
  getAllProducts,
  postProduct,
  updateProduct,
  validateProductBody,
} from "./product.controller";

const productRouter = express.Router();
productRouter.post("/", validateProductBody, postProduct);
productRouter.get("/", getAllProducts);
productRouter.put("/", updateProduct);
productRouter.delete("/", deleteProduct);

export default productRouter;
