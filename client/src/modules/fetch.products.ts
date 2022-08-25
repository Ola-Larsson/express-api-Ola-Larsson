import { Product } from "./model";
import { renderProductCards } from "./productCard";

export async function fetchAllProducts() {
  const result = await fetch("/products");
  const data: Product[] = await result.json();
  return data;
}

export async function fetchProduct(id: number) {
  const result = await fetch("/products/" + id);
  if (result.ok) {
    const product: Product = await result.json();
    const data: Product[] = [];
    data.push(product);
    return data;
  } else {
    alert("Product not found");
    return;
  }
}

export async function deleteProduct(id: number) {
  if (confirm("Are you sure you want to delete the product with id: " + id)) {
    await fetch("/products/" + id, { method: "DELETE" });
    renderProductCards(await fetchAllProducts());
  }
}

export async function updateProduct(formData: {
  [k: string]: FormDataEntryValue;
}) {
  const response = await fetch("/products", {
    method: "PUT",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(formData),
  });

  if (response.status === 200) {
    alert("Product updated successfully");
  } else {
    alert("Something went wrong");
  }

  renderProductCards(await fetchAllProducts());
}

export async function createProduct(formData: {
  [k: string]: FormDataEntryValue;
}) {
  const response = await fetch("/products", {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(formData),
  });

  if (response.status === 201) {
    alert("Product created successfully");
  } else {
    alert("Something went wrong");
  }

  renderProductCards(await fetchAllProducts());
}
