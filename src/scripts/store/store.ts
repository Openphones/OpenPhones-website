import { addToCart } from "./addToCart";
import { cart, products } from "../dataIO";
import { closePopup } from "./closePopup";
import { createItems } from "./createItems";
import { createPopups } from "./createPopups";

const store = document.getElementById("store");
const inStock = document.getElementById("in-stock");
const customOrder = document.getElementById("custom-order")

for (const product of await products) {
    const item = createItems(product);
    const popup = createPopups(product);

    if (product.stock) {
        inStock.append(item);
        inStock.append(popup);

        let quantitySelector = document.getElementById(`quantity-${product.id}`);
        quantitySelector.previousElementSibling.remove();
        quantitySelector.remove();
    } else {
        customOrder.append(item);
        customOrder.append(popup);
    }

    const addToCartButton = document.getElementById(`add-${product.id}`);
    addToCartButton.addEventListener("click", () => {
        const existingCartItem = cart.find((cartItem) => cartItem.id === product.id)

        if (existingCartItem) {
            alert("Item is already in cart.")
        } else {
            addToCart(addToCartButton, product.id);
        }

        closePopup(product.id)
    });

    document.getElementById(`close-${product.id}`).addEventListener("click", () => {
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
