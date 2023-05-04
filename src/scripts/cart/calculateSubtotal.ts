import { cart, currencyConvert, products } from "../dataIO";

export async function calculateSubtotal() {
    var subtotal = 0

    for (const cartItem of cart) {
        const matchedItems = [(await products).find((product) => product.id == cartItem.id)]

        for (const item of matchedItems) {
            subtotal += cartItem.quantity * item.price;
        }
    }

    document.getElementById("subtotal").innerHTML = `Subtotal: ${currencyConvert(subtotal)}`;

    if (subtotal === 0) {
        location.reload()
    }
}