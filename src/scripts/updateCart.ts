import { cart } from "./dataIO";

export function updateCart() {
    var cartBadge = document.getElementById("cart-badge") as HTMLElement;
    var cartArray = [];

    for (var key of cart) {
        cartArray.push(key.quantity);
    }
    cartBadge.innerHTML = cartArray.reduce((a, b) => a + b);
}

localStorage.getItem("cart") ? updateCart() : "";
