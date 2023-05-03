import { cart } from "./dataIO";

export function updateCart() {
    const cartBadge = document.getElementById("cart-badge") as HTMLElement;
    const cartArray = [];

    for (const key of cart) {
        cartArray.push(key.quantity);
    }
    cartBadge.innerHTML = cartArray.reduce((a, b) => a + b);
}

localStorage.getItem("cart") ? updateCart() : "";
