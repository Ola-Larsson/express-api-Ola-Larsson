import { Product } from "./model";

export async function fetchAllProducts() {
  const result = await fetch("/products");
  const data: Product[] = await result.json();
  return data;
}

export async function fetchProduct(id: number) {
  const result = await fetch("/products/" + id);
  const data: Product[] = await result.json();
  return data;
}
