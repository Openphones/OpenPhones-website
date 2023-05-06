import { cart, currencyConvert, products, url } from "../dataIO";
import { calculateSubtotal } from "./calculateSubtotal";
import { cartGen } from "./cartGen";
import { updateQuantity } from "./updateQuantity";

if (cart.length !== 0) {
    (document.querySelector(".header") as HTMLElement).style.display = "block";
    document.querySelector(".empty-cart-text").remove();

    for (const cartItem of cart) {
        const matchedItems = [(await products).find((product) => product.id == cartItem.id)]

        for (const item of matchedItems) {
            const itemColor = item.overrides.color.find((color) => color.name === cartItem.override.color)
            const itemStorage = item.overrides.storage.find((storage) => storage.size === cartItem.override.storage)

            document.getElementById("cart").append(cartGen(cartItem.quantity, item, itemStorage, itemColor));

            if (item.stock) {
                let quantity = document.getElementById(`quantity-${item.id}-${itemColor.name}`)
                quantity.parentElement.innerHTML = `1 × ${currencyConvert(item.price)}`
                quantity.remove();
            } else {
                document.getElementById(`quantity-${item.id}-${itemColor.name}`).addEventListener("change", () => {
                    updateQuantity(document.getElementById(`quantity-${item.id}-${itemColor.name}`) as HTMLInputElement, item.id, itemColor.name)
                    calculateSubtotal();
                })
            }
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
    window.location.href = redirect ? redirect.url : "/cancel";
});
