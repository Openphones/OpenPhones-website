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

    const addToCartButtons = store.querySelectorAll(".add-to-cart");
    for (let button of addToCartButtons) {
        button.addEventListener("click", () => {
            addToCart(button, product.id);
            closePopup(product.id)
        });
    }

    const closeButtons = store.querySelectorAll(".close");
    for (let button of closeButtons) {
        button.addEventListener("click", () => {
            closePopup(product.id)
        })
    }
}

const items = store.querySelectorAll(".store-item");
const wrappers = store.querySelectorAll(".wrapper");

for (let i = 0; i < items.length; i++) {
    items.item(i).addEventListener("click", () => {
        const wrapper = wrappers[i] as HTMLElement;
        wrapper.style.display = "block";
    });
};
