import fs from "fs";
import { Product } from "./product.model";

export const saveDataToFile = (products: Product[]) => {
  fs.writeFileSync("./src/resources/products.json", JSON.stringify(products));
};

export const loadDataFromFile = () => {
  const jsonData = fs.readFileSync("./src/resources/products.json", "utf8");
  const products: Product[] = JSON.parse(jsonData);
  return products;
};
