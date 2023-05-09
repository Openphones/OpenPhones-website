import { cart } from "./dataIO";

export function updateCart() {
    const cartBadge = document.getElementById("cart-badge") as HTMLElement;
    let cartArray = 0;

    for (const key of cart) {
        cartArray += key.quantity;
    }

    cartBadge.innerHTML = `${cartArray}`;
}

localStorage.getItem("cart") && updateCart();
