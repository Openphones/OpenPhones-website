import { addToCart } from "./addToCart";
import { closePopup } from "./closePopup";
import { IProduct, currencyConvert, products } from "./dataIO";

const store = document.getElementById("store");

for (const product of await products) {
    const item = createItems(product);
    const popup = createPopups(product);

    store.append(item);
    store.append(popup);

    const addToCartButtons = store.querySelectorAll(".add-to-cart");
    for (let button of addToCartButtons) {
        button.addEventListener("click", () => {
            addToCart(button, product.id);
            closePopup(product.id)
        });
    }

    const closeButtons = store.querySelectorAll(".close");
    for (let button of closeButtons) {
        button.addEventListener("click", () => {
            closePopup(product.id)
        })
    }
}

function createItems(product: IProduct) {
    const item = document.createElement("div");

    item.classList.add("store-item");
    item.innerHTML = `
        <img src="${product.images[0]}" alt="${product.long_name}"/>
        <h3>${product.short_name} (${product.quality})</h3>
        <b>${currencyConvert(product.price)}</b>
        <p>${product.description}</p>
        `;

    return item;
}

function createPopups(product: IProduct) {
    const wrapper = document.createElement("div");
    wrapper.id = product.id;
    wrapper.classList.add("wrapper");
    wrapper.innerHTML = `
    <div class="popup">
        <img src="${product.images[0]}" alt="${product.long_name}" />
        <div class="details">
            <h2>${product.long_name}</h2>
            <b>${currencyConvert(product.price)}</b>
            <p>${product.description}</p>
            <div class="purchase">
                <label for="quantity-${product.id}">Quantity:</label>
                <input type="number" id="quantity-${product.id}" value="1" min="1"/>
                <button type="submit" class="add-to-cart">Add to cart</button>
            </div>
        </div>
        <button type="button" class="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                ><path
                    d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                ></path></svg
            ></button
        >
    </div>`;

    return wrapper;
}

const items = store.querySelectorAll(".store-item");
const wrappers = store.querySelectorAll(".wrapper");

for (let i = 0; i < items.length; i++) {
    items.item(i).addEventListener("click", () => {
        const wrapper = wrappers[i] as HTMLElement;
        wrapper.style.display = "block";
    });
};
