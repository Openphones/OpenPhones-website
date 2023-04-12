import { jsonLinks } from "./dataIO";
import { currencyConvert } from "./dataIO";

var store = document.getElementById("store");

for (var link of jsonLinks) {
    var item = createItems();
    var popup = createPopups();

    store!.append(item);
    store!.append(popup);
}

function createItems() {
    var block = document.createElement("div");

    block.classList.add("store-item");
    block.innerHTML = `
        <img src=${link["images"][0]} />
        <h3>${link["short_name"]} (${link["quality"]})</h3>
        <b>${currencyConvert(link["price"])}</b>
        <p>${link["description"]}</p>
        `;
    return block;
}

function createPopups() {
    var wrapper = document.createElement("div");
    wrapper.id = link["id"];
    wrapper.classList.add("wrapper");
    wrapper.innerHTML = `
    <div class="popup">
        <img src="${link["images"][0]}" alt="First image" />
        <div class="details">
            <h2>${link["long_name"]}</h2>
            <b>${currencyConvert(link["price"])}</b>
            <p>${link["description"]}</p>
            <div class="purchase">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" min="1"/>
                <button type="submit" class="add-${link["id"]
        }" onclick="addToCart('${link["id"]}')">Add to cart</button>
            </div>
        </div>
        <button type="button" class="close" onclick="document.getElementById('${link["id"]
        }').style.display='none';">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                ><path
                    d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                ></path></svg
            ></button
        >
    </div>`;

    return wrapper;
}

const items = store!.querySelectorAll(".store-item");
const wrappers = store!.querySelectorAll(".wrapper");

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        const wrapper = wrappers[index] as HTMLElement;
        wrapper.style.display = "block";
    });
});
