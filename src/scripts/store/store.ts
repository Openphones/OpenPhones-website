import { addToCart } from "./addToCart";
import { products } from "../dataIO";
import { closePopup } from "./closePopup";
import { createItems } from "./createItems";
import { createPopups } from "./createPopups";

const store = document.getElementById("store");

for (const product of await products) {
    const item = createItems(product);
    const popup = createPopups(product);

    store.append(item);
    store.append(popup);

    const addToCartButton = document.getElementById(`add-${product.id}`);
    addToCartButton.addEventListener("click", () => {
        addToCart(addToCartButton, product.id);
        closePopup(product.id)
    });

    const closeButton = document.getElementById(`close-${product.id}`);
    closeButton.addEventListener("click", () => {
        closePopup(product.id)
    })
}

const items = store.querySelectorAll(".store-item");
const wrappers = store.querySelectorAll(".wrapper");

for (let i = 0; i < items.length; i++) {
    items.item(i).addEventListener("click", () => {
        const wrapper = wrappers[i] as HTMLElement;
        wrapper.style.display = "block";
    });
};
