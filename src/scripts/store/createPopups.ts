import { IProduct, cart, currencyConvert } from "../dataIO";
import { writeDescription } from "../writeDescription";
import { closePopup } from "./closePopup";
import { createCarousel } from "./createCarousel";
import { createOverrides } from "./createOverrides";

export function createPopups(product: IProduct) {
    const wrapper = document.createElement("div");
    wrapper.id = product.id;
    wrapper.classList.add("wrapper");
    wrapper.innerHTML = `
    <div class="popup">
        <div class="details">
            <h2>${product.long_name}</h2>
            <span class="bold">${currencyConvert(product.price)}</span>
            <p>${writeDescription(product.description)}</p>
            <div class="customisation" id="customisation-${product.id}">
                <div class="purchase">
                    <label for="quantity-${product.id}">Quantity:</label>
                    <input type="number" id="quantity-${product.id}" value="1" min="1"/>
                    <button type="submit" class="add-to-cart" title="Add to cart">Add to cart</button>
                </div>
            </div>
        </div>
        <button type="button" class="close" title="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                ><path
                    d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                ></path></svg
            ></button
        >
    </div>`;

    wrapper.firstElementChild.prepend(createCarousel(product))

    const customisationSection = wrapper.querySelector(".customisation") as HTMLDivElement
    customisationSection.prepend(createOverrides(product))

    wrapper.querySelector(`.close`).addEventListener("click", () => {
        closePopup(product.id)
    })

    return wrapper;
}