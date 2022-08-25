import { fetchAllProducts } from "./modules/fetch.products";
import { renderProductCards } from "./modules/productCard";
import { renderProductForm } from "./modules/productForm";
import { src } from "./modules/srcButton";
import "./style.css";

eventHandler();
renderProductCards(await fetchAllProducts());

function eventHandler() {
  const searchButton = document.getElementById("srcBtn");
  if (searchButton) {
    searchButton.addEventListener("click", src);
  }

  const allButton = document.getElementById("allBtn");
  if (allButton) {
    allButton.addEventListener("click", async () =>
      renderProductCards(await fetchAllProducts())
    );
  }

  const createButton = document.getElementById("createBtn");
  if (createButton) {
    createButton.addEventListener("click", () => renderProductForm());
  }
}
