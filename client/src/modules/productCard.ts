import { Product } from "./model";

const productDiv = document.getElementById("productDiv");

function buildProductCard(product: Product) {
  const productCard = document.createElement("div");
  productCard.classList.add("productCard");

  productCard.appendChild(fillDivsWithText(product.Id.toString()));
  productCard.appendChild(fillDivsWithText(product.Title));
  productCard.appendChild(fillDivsWithText(product.Description));
  productCard.appendChild(fillDivsWithText(product.Amount.toString()));
  productCard.appendChild(fillDivsWithText(product.Price.toString()));
  const btnDiv = document.createElement("div");
  btnDiv.appendChild(createEditButton(product));
  btnDiv.appendChild(createDeleteButton(product));
  productCard.appendChild(btnDiv);

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

function buildHeaderTitles() {
  if (productDiv) {
    productDiv.innerHTML = "";
  }
  const headerTitle = document.createElement("div");
  headerTitle.classList.add("headerTitles");

  headerTitle.appendChild(fillDivsWithText("ID"));
  headerTitle.appendChild(fillDivsWithText("TITLE"));
  headerTitle.appendChild(fillDivsWithText("DESCRIPTION"));
  headerTitle.appendChild(fillDivsWithText("AMOUNT"));
  headerTitle.appendChild(fillDivsWithText("PRICE"));
  headerTitle.appendChild(fillDivsWithText("FUNCTIONS"));

  productDiv?.appendChild(headerTitle);
}

export async function renderProductCards(products: Product[]) {
  buildHeaderTitles();
  for (const product of products) {
    buildProductCard(product);
  }
}

function createEditButton(product: Product) {
  const button = document.createElement("button");
  button.innerHTML = "EDIT";

  return button;
}

function createDeleteButton(product: Product) {
  const button = document.createElement("button");
  button.innerHTML = "DELETE";

  return button;
}
