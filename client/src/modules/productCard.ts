import { Product } from "./model";

function buildProductCard(product: Product) {
  const productDiv = document.getElementById("productDiv");
  const productCard = document.createElement("div");
  productCard.classList.add("productCard");

  productCard.appendChild(fillDivsWithText(product.Id.toString()));
  productCard.appendChild(fillDivsWithText(product.Title));
  productCard.appendChild(fillDivsWithText(product.Description));
  productCard.appendChild(fillDivsWithText(product.Amount.toString()));
  productCard.appendChild(fillDivsWithText(product.Price.toString()));

  productDiv?.appendChild(productCard);
  return productDiv;
}

function fillDivsWithText(text: string) {
  const div = document.createElement("div");
  const textField = document.createElement("p");
  textField.innerText = text;
  div.appendChild(textField);
  return div;
}

export async function getAllProducts() {
  const result = await fetch("/products");
  const data: Product[] = await result.json();
  return data;
}

export async function renderProductCards() {
  const productList: Product[] = await getAllProducts();
  for (const product of productList) {
    buildProductCard(product);
  }
}
