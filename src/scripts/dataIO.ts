var currency = sessionStorage.getItem("currency") ? sessionStorage.getItem("currency")?.toString() : "USD";

export var url = location.origin.endsWith(".onion") ? "http://nrnd5rs5aut37ny3vst42sj7a3v7xpw2y42k453gf6ibjlro5yjdpvyd.onion" : "https://api.openphones.global"

var response = await fetch(`${url}/products?currency=${currency}`);
export var jsonLinks = await response.json();

export function currencyConvert(value: number) {
    return new Intl.NumberFormat("en", { style: "currency", currency: currency }).format(value)
}

export var cart = JSON.parse(localStorage.getItem("cart")!)
