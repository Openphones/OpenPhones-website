import { cart, currencyConvert, products, url } from "../dataIO";
import { cartGen } from "./cartGen";

if (cart.length !== 0) {
    (document.querySelector(".header") as HTMLElement).style.display = "block";
    (document.querySelector(".empty-cart-text") as HTMLElement).style.display = "none";
    let total = 0;

    for (const cartItem of cart) {
        for (const link of await products) {
            if (link.id == cartItem.id) {
                document.getElementById("cart").append(cartGen(cartItem.quantity, link));
                total += link.price * cartItem.quantity;
            }
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
