var currency = sessionStorage.getItem("currency") ? sessionStorage.getItem("currency")?.toString() : "USD";

var response = await fetch(`https://mester.info:9876/products?currency=${currency}`, { mode: "no-cors" });
export var jsonLinks = await response.json();

export function currencyConvert(value: number) {
    return new Intl.NumberFormat("en", { style: "currency", currency: currency }).format(value)
}
