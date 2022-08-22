import express from "express";
import {
  deleteProduct,
  getAllProducts,
  getProduct,
  postProduct,
  updateProduct,
  validateNewProductBody,
  validateUpdatedProductBody,
} from "./product.controller";

const productRouter = express.Router();
productRouter.post("/", validateNewProductBody, postProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:Id", getProduct);
productRouter.put("/", validateUpdatedProductBody, updateProduct);
productRouter.delete("/:Id", deleteProduct);

export default productRouter;
