import { IProduct, currencyConvert } from "../dataIO";

export function cartGen(quantity: number, product: IProduct) {
    const item = document.createElement("div");
    item.id = product.id;
    item.classList.add("cart-item");
    item.innerHTML = `
        <img src="${product.images[0]}" alt="${product.long_name}" />
        <div class="details">
            <h2>${product.long_name}</h2>
            <p>${product.description}</p>
            <div class="price">
                <b><input type="number" id="quantity-${product.id}" value="${quantity}" min="1" title="Quantity" /> × ${currencyConvert(product.price)}</b>
            </div>
            <button type="button" title="Remove item" id="remove-${product.id}">Remove item</button>
        </div>`;

    return item;
}
