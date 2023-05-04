import { cart, currencyConvert, products, url } from "../dataIO";
import { calculateSubtotal } from "./calculateSubtotal";
import { cartGen } from "./cartGen";
import { removeItem } from "./removeItem";
import { updateQuantity } from "./updateQuantity";

if (cart.length !== 0) {
    (document.querySelector(".header") as HTMLElement).style.display = "block";
    (document.querySelector(".empty-cart-text") as HTMLElement).style.display = "none";

    for (const cartItem of cart) {
        const matchedItems = [(await products).find((product) => product.id == cartItem.id)]

        for (const item of matchedItems) {
            document.getElementById("cart").append(cartGen(cartItem.quantity, item));

            document.getElementById(`remove-${item.id}`).addEventListener("click", () => {
                removeItem(item.id);
                calculateSubtotal();
            })

            document.getElementById(`quantity-${item.id}`).addEventListener("change", () => {
                updateQuantity(document.getElementById(`quantity-${item.id}`) as HTMLInputElement, item.id)
                calculateSubtotal();
            })
        }
    }

    calculateSubtotal()
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
