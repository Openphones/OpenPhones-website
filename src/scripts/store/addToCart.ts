import { updateCart } from "../updateCart";
import { cart } from "../dataIO";

export function addToCart(button: Element, item: string) {
    const quantity = button.previousElementSibling ? (button.previousElementSibling as HTMLInputElement).valueAsNumber : 1;

    const existingCartItem = cart.find(
        (cartItem) => cartItem.id === item
    );
    if (existingCartItem) {
        existingCartItem.quantity += quantity;
    } else {
        cart.push({ id: item, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}
