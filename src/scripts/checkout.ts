import { url } from "./dataIO"
import { cart } from "./dataIO";

const checkoutButton = document.getElementById("checkout");
checkoutButton?.addEventListener("click", async () => {
    const checkoutPayload = JSON.stringify({
        items: cart,
        type: "stripe",
    });

    const redirect = await fetch(`${url}/create-checkout-session`,
        {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: checkoutPayload,
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
