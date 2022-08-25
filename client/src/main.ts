import { fetchAllProducts } from "./modules/fetch.products";
import { renderProductCards } from "./modules/productCard";
import "./style.css";

renderProductCards(await fetchAllProducts());
