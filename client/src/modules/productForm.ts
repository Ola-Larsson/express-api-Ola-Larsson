import { createProduct, updateProduct } from "./fetch.products";
import { Product } from "./model";

export function renderProductForm(product?: Product) {
  const productDiv = document.getElementById("productDiv");
  if (productDiv) {
    productDiv.innerHTML = "";
    const form = document.createElement("form");
    form.appendChild(buildTitleInput(product?.Title));
    form.appendChild(buildDescriptionInput(product?.Description));
    form.appendChild(buildAmountInput(product?.Amount));
    form.appendChild(buildPriceInput(product?.Price));
    form.appendChild(buildButton());
    form.addEventListener("submit", (e) => handleSubmit(e, product?.Id));

    productDiv?.appendChild(form);
  }
}

function buildTitleInput(title: string = "") {
  const titleLabel = document.createElement("label");
  titleLabel.innerText = "Title:";
  titleLabel.htmlFor = "title";

  const titleInput = document.createElement("input");
  titleInput.type = "string";
  titleInput.name = "Title";
  titleInput.id = "title";
  titleInput.value = title;

  const titleDiv = document.createElement("div");
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);

  return titleDiv;
}

function buildDescriptionInput(description: string = "") {
  const descriptionLabel = document.createElement("label");
  descriptionLabel.innerText = "Description:";
  descriptionLabel.htmlFor = "description";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "string";
  descriptionInput.name = "Description";
  descriptionInput.id = "description";
  descriptionInput.value = description;

  const titleDiv = document.createElement("div");
  titleDiv.appendChild(descriptionLabel);
  titleDiv.appendChild(descriptionInput);

  return titleDiv;
}

function buildAmountInput(amount: number = 0) {
  const amountLabel = document.createElement("label");
  amountLabel.innerText = "Amount:";
  amountLabel.htmlFor = "amount";

  const amountInput = document.createElement("input");
  amountInput.type = "number";
  amountInput.name = "Amount";
  amountInput.id = "amount";
  amountInput.value = amount.toString();

  const amountDiv = document.createElement("div");
  amountDiv.appendChild(amountLabel);
  amountDiv.appendChild(amountInput);

  return amountDiv;
}

function buildPriceInput(price: number = 0) {
  const priceLabel = document.createElement("label");
  priceLabel.innerText = "Price:";
  priceLabel.htmlFor = "amount";

  const priceInput = document.createElement("input");
  priceInput.type = "number";
  priceInput.name = "Price";
  priceInput.id = "amount";
  priceInput.value = price.toString();

  const priceDiv = document.createElement("div");
  priceDiv.appendChild(priceLabel);
  priceDiv.appendChild(priceInput);

  return priceDiv;
}

function buildButton() {
  const btn = document.createElement("input");
  btn.type = "submit";
  btn.value = "Submit";

  return btn;
}

async function handleSubmit(e: SubmitEvent, id?: number) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  if (id) {
    formData.append("Id", id.toString());
    const plainObject = Object.fromEntries(formData.entries());
    await updateProduct(plainObject);
  } else {
    const plainObject = Object.fromEntries(formData.entries());
    await createProduct(plainObject);
  }
}
