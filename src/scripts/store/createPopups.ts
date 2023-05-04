import { IProduct, currencyConvert } from "../dataIO";

export function createPopups(product: IProduct) {
    const wrapper = document.createElement("div");
    wrapper.id = product.id;
    wrapper.classList.add("wrapper");
    wrapper.innerHTML = `
    <div class="popup">
        <img src="${product.images[0]}" alt="${product.long_name}" />
        <div class="details">
            <h2>${product.long_name}</h2>
            <b>${currencyConvert(product.price)}</b>
            <p>${product.description.replaceAll("\n", "<br />")}</p>
            <div class="purchase">
                <label for="quantity-${product.id}">Quantity:</label>
                <input type="number" id="quantity-${product.id}" value="1" min="1"/>
                <button type="submit" id="add-${product.id}" title="Add to cart">Add to cart</button>
            </div>
        </div>
        <button type="button" class="close" id="close-${product.id}" title="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                ><path
                    d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                ></path></svg
            ></button
        >
    </div>`;

    return wrapper;
}