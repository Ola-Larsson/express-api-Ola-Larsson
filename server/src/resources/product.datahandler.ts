import fs from "fs";
import { Product } from "./product.model";

export const saveDataToFile = (products: Product[]) => {
  fs.writeFileSync("./src/resources/testFile.json", JSON.stringify(products));
};

export const loadDataFromFile = () => {
  const jsonData = fs.readFileSync("./src/resources/testFile.json", "utf8");
  const products: Product[] = JSON.parse(jsonData);
  return products;
};
