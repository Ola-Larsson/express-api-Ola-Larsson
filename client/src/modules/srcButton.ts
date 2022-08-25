import { fetchProduct } from "./fetch.products";
import { renderProductCards } from "./productCard";

export async function src() {
  const response = prompt("What id do you want to search for?");
  if (response) {
    const id: number = parseInt(response);
    if (id) {
      const results = await fetchProduct(id);
      if (results) {
        renderProductCards(results);
      }
    }
  }
}
