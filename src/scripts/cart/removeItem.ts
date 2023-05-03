import { cart } from "../dataIO";
import { updateCart } from "../updateCart";

export function removeItem(id: string) {
    const index = cart.findIndex((cartItem) => (cartItem.id === id));

    cart.splice(index, 1)

    document.getElementById(id).style.display = "none";
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}
