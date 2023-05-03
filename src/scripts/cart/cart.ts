import { cart, currencyConvert, products, url } from "../dataIO";
import { cartGen } from "./cartGen";
import { removeItem } from "./removeItem";
import { updateQuantity } from "./updateQuantity";

if (cart.length !== 0) {
    (document.querySelector(".header") as HTMLElement).style.display = "block";
    (document.querySelector(".empty-cart-text") as HTMLElement).style.display = "none";
    let total = 0;

    let cartItemsById = {}

    for (const cartItem of cart) {
        cartItemsById[cartItem.id] = cartItem;
    }

    for (const product of await products) {
        const cartItem = cartItemsById[product.id]

        if (cartItem) {
            document.getElementById("cart").append(cartGen(cartItem.quantity, product));
            total += product.price * cartItem.quantity;

            document.getElementById(`remove-${product.id}`).addEventListener("click", () => {
                removeItem(product.id);
            })

            document.getElementById(`quantity-${product.id}`).addEventListener("change", () => {
                updateQuantity(document.getElementById(`quantity-${product.id}`) as HTMLInputElement, product.id)
            })
        }
    }

    document.getElementById("subtotal").innerHTML = `Subtotal: ${currencyConvert(total)}`;
}

document.getElementById("checkout").addEventListener("click", async () => {
    const redirect = await fetch(`${url}/create-checkout-session`,
        {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                items: cart,
                type: "stripe",
            }),
        }
    )
        .then(
            r => {
                if (!r.ok) {
                    alert("Something has went wrong while trying to create a checkout session! :(");
                    return null;
                }
                return r.json();
            }) as { url: string; };
    window.location.href = redirect?.url;
});
