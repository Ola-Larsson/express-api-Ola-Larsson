import express from "express";
import { logger, notFoundHandler } from "./middlewares";
import productRouter from "./resources/product.router";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/products", productRouter);

app.use(notFoundHandler);
app.listen(3000, () => console.log("running on http://localhost:3000"));
