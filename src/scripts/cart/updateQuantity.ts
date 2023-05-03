import { cart } from "../dataIO";
import { updateCart } from "../updateCart";

export function updateQuantity(input: HTMLInputElement, id: string) {
    const cartItem = cart.find((item) => item.id === id);

    cartItem.quantity = input.valueAsNumber
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart()
}