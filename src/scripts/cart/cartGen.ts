import { IProduct, IProductColor, IProductStorage, currencyConvert } from "../dataIO";
import { writeDescription } from "../writeDescription";
import { calculateSubtotal } from "./calculateSubtotal";
import { removeItem } from "./removeItem";

export function cartGen(quantity: number, product: IProduct, storage: IProductStorage, color: IProductColor) {
    const item = document.createElement("div");
    item.id = `${product.id}-${color.name}`;
    item.classList.add("cart-item");
    item.innerHTML = `
        <img src="${product.images[0]}" alt="${product.long_name}" />
        <div class="details">
            <h2>${product.long_name}</h2>
            <div class="customisation"></div>
            <p>${writeDescription(product.description)}</p>
            <div class="price">
                <span class="bold"><input type="number" id="quantity-${product.id}-${color.name}" value="${quantity}" min="1" title="Quantity" /> × ${currencyConvert(product.price)}</span>
            </div>
            <button type="button" title="Remove item" class="remove">Remove item</button>
        </div>`;

    const customisation = item.querySelector(".customisation") as HTMLDivElement
    customisation.innerHTML = `
    <p><span class="bold">Storage:</span> ${storage.name}</p>
    <p><span class="bold">Color:</span> ${color.readable}</p>
    `

    item.querySelector(".remove").addEventListener("click", () => {
        removeItem(product.id, color.name);
        calculateSubtotal();
    })
    
    return item;
}
