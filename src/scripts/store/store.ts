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

    const customisationSection = document.getElementById(`customisation-${product.id}`) as HTMLDivElement
    const addToCartButton = customisationSection.querySelector(".add-to-cart")

    addToCartButton.addEventListener("click", () => {
        const selectedStorage = parseInt((customisationSection.querySelector(".storage-select") as HTMLSelectElement).selectedOptions[0].value)
        const selectedColor = !Number.isNaN(selectedStorage) ? (customisationSection.querySelector(".color-select") as HTMLSelectElement).selectedOptions[0].value : "";
        const quantityInput = customisationSection.querySelector(`#quantity-${product.id}`) as HTMLInputElement
        const quantity = quantityInput ? quantityInput.valueAsNumber : 1

        const existingCartItem = cart.find((cartItem) => cartItem.id === product.id)

        if (existingCartItem && product.stock) {
            alert("Item is already in cart.")
            closePopup(product.id)
        } else {
            addToCart(product.id, quantity, selectedStorage, selectedColor);
        }
    });
}

const items = store.querySelectorAll(".store-item");
const wrappers = store.querySelectorAll(".wrapper");

for (let i = 0; i < items.length; i++) {
    items.item(i).addEventListener("click", () => {
        const wrapper = wrappers[i] as HTMLElement;
        wrapper.style.display = "block";
    });
};
