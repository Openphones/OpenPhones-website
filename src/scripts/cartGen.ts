import { jsonLinks } from "./dataIO";
import { currencyConvert } from "./dataIO";
import { cart } from "./dataIO";

var cartPage = document.getElementById("cart");
var subtotal = 0;
var total = document.getElementById("subtotal");

if (cart.length == 0) {
    document.getElementById("checkout")!.style.display = "none";
    total!.previousElementSibling!.innerHTML = "Add some items to cart!";
} else {
    cart.forEach((cartItem: { id: any; quantity: number; }) => {
        for (var link of jsonLinks) {
            if (link["id"] == cartItem.id) {
                cartPage!.append(cartGen(cartItem, link));
                subtotal += link["price"] * cartItem.quantity;
            }
        }
    });

    total!.innerHTML = `Subtotal: ${currencyConvert(subtotal)}`;
}

function cartGen(item: { id: string; quantity: number; }, link: {
    id: string,
    short_name: string,
    long_name: string,
    quality: string,
    price: number,
    description: string,
    images: Array<string>
}) {
    var cartItem = document.createElement("div");
    cartItem.id = item.id;
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <img src="${link["images"][0]}" alt="${link["long_name"]}" />
        <div class="details">
            <h2>${link["long_name"]}</h2>
            <p>${link["description"]}</p>
            <div class="price">
                <b>${item.quantity} × ${currencyConvert(link["price"])}</b>
            </div>
        </div>`;

    return cartItem;
}
