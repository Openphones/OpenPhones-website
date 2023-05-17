import { ICartItem, IProduct } from "./dataIO";

export function calculateSubtotal(cart: ICartItem[], products: IProduct[]) {
    let subtotal = 0;
    const matchedItems = cart
        .map((cartItem) => products.find((product) => product.id === cartItem.id))
        .filter((item) => item !== undefined);

    for (const index in cart) {
        subtotal += cart[index].quantity * matchedItems[index].price
    }

    return subtotal;
}