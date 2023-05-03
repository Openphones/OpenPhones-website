import { IProduct, cart, currencyConvert, products } from "./dataIO";

if (cart.length !== 0) {
    (document.querySelector(".header") as HTMLElement).style.display = "block";
    (document.querySelector(".empty-cart-text") as HTMLElement).style.display = "none";
    const cartPage = document.getElementById("cart");
    const totalText = document.getElementById("subtotal");
    let total = 0;

    for (const cartItem of cart) {
        for (const link of await products) {
            if (link.id == cartItem.id) {
                cartPage.append(cartGen(cartItem.quantity, link));
                total += link.price * cartItem.quantity;
            }
        }
    }

    totalText.innerHTML = `Subtotal: ${currencyConvert(total)}`;
}

function cartGen(quantity: number, product: IProduct) {
    const item = document.createElement("div");
    item.id = product.id;
    item.classList.add("cart-item");
    item.innerHTML = `
        <img src="${product.images[0]}" alt="${product.long_name}" />
        <div class="details">
            <h2>${product.long_name}</h2>
            <p>${product.description}</p>
            <div class="price">
                <b>${quantity} × ${currencyConvert(product.price)}</b>
            </div>
        </div>`;

    return item;
}
