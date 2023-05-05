import { IProduct, currencyConvert } from "../dataIO";
import { writeDescription } from "../writeDescription";

export function createItems(product: IProduct) {
    const item = document.createElement("div");

    item.classList.add("store-item");
    item.innerHTML = `
        <img src="${product.images[0]}" alt="${product.long_name}"/>
        <h3>${product.short_name} (${product.quality})</h3>
        <span class="bold">${currencyConvert(product.price)}</span>
        <p>${writeDescription(product.description)}</p>
        `;

    return item;
}
