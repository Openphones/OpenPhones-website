import { updateCart } from "../updateCart";
import { cart } from "../dataIO";
import { closePopup } from "./closePopup";

export function addToCart(item: string, quantity: number, storage: number, color: string) {
    const itemProps = { id: item, quantity: quantity, overrides: { color: color, size: storage } }

    const existingCartItem = cart.find(
        (cartItem) => cartItem === itemProps
    );
    if (existingCartItem) {
        existingCartItem.quantity += quantity;
    } else {
        if (storage !== null && color !== "") {
            cart.push(itemProps);
            closePopup(item)
        } else {
            alert("Select a storage and color option");
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}
