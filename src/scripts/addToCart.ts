import { updateCart } from "./updateCart";
import { cart } from "./dataIO";

const cartItems = cart;

export function addToCart(button: Element, item: string) {
    const quantity = (button.previousElementSibling as HTMLInputElement).valueAsNumber;

    const existingCartItem = cartItems.find(
        (cartItem: { id: string; }) => cartItem.id === item
    );
    if (existingCartItem) {
        existingCartItem.quantity += quantity;
    } else {
        cartItems.push({ id: item, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));

    updateCart();
}
