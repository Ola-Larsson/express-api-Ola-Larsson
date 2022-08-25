import { Product } from "./model";
import { renderProductCards } from "./productCard";

export async function fetchAllProducts() {
  const result = await fetch("/products");
  const data: Product[] = await result.json();
  return data;
}

export async function fetchProduct(id: number) {
  const result = await fetch("/products/" + id);
  const product: Product = await result.json();
  const data: Product[] = [];
  data.push(product);
  return data;
}

export async function deleteProduct(id: number) {
  if (confirm("Are you sure you want to delete the product with id: " + id)) {
    const result = await fetch("/products/" + id, { method: "DELETE" });
    renderProductCards(await fetchAllProducts());
  }
}
