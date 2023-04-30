var currency = sessionStorage.getItem("currency") ? sessionStorage.getItem("currency")?.toString() : "USD";

var response = await fetch(`https://api.openphones.global/products?currency=${currency}`);
export var jsonLinks = await response.json();

export function currencyConvert(value: number) {
    return new Intl.NumberFormat("en", { style: "currency", currency: currency }).format(value)
}
