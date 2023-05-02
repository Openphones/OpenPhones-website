import { url } from "./dataIO"
import { cart } from "./dataIO";

var checkoutButton = document.getElementById("checkout")
checkoutButton?.addEventListener("click", checkout)

async function checkout() {
    var checkoutPayload = JSON.stringify({
        items: cart,
        type: "stripe",
    });
    var stripeLink = await fetch(
        `${url}/create-checkout-session`,
        {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: checkoutPayload,
        }
    );
    var redirect = await stripeLink.json();
    window.location.href = redirect.url;
}