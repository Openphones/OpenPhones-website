import { updateCart } from "./updateCart";
import { cart } from "./dataIO";

var cartItems = cart ? cart : [];

export function addToCart(button: Element, item: any) {
    var quantity = parseInt((button?.previousElementSibling as HTMLInputElement).value);

    var existingCartItem = cartItems.find(
        (cartItem: { id: any; }) => cartItem.id === item
    );
    if (existingCartItem) {
        existingCartItem.quantity += quantity;
    } else {
        cartItems.push({ id: item, quantity: quantity });
    }

    var cart = JSON.stringify(cartItems);
    localStorage.setItem("cart", cart);

    updateCart();
}