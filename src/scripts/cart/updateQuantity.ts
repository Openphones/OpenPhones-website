import { cart } from "../dataIO";
import { updateCart } from "../updateCart";
import { removeItem } from "./removeItem";

export function updateQuantity(input: HTMLInputElement, id: string, color: string) {
    const cartItem = cart.find((item) => item.id === id);

    cartItem.quantity = input.valueAsNumber
    localStorage.setItem("cart", JSON.stringify(cart));

    if (cartItem.quantity <= 0) {
        removeItem(id, color);
    } else {
        updateCart()
    }
}
