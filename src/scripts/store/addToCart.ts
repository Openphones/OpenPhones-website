import { updateCart } from "../updateCart";
import { cart } from "../dataIO";
import { closePopup } from "./closePopup";

export function addToCart(item: string, quantity: number, size: number, color: string) {
    const itemProps = { id: item, quantity: quantity, overrides: { color: color, size: size } }

    const existingCartItem = cart.find(
        (cartItem) => cartItem === itemProps
    );
    if (existingCartItem) {
        existingCartItem.quantity += quantity;
    } else {
        if (size !== null && color !== "") {
            cart.push(itemProps);
            closePopup(item)
        } else {
            alert("Select a storage and color option");
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}
