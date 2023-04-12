var response = await fetch("/OpenPhones-website/phones.json");
export var jsonLinks = await response.json();

export function currencyConvert(value: number) {
    var currency = sessionStorage.getItem("currency") ? sessionStorage.getItem("currency")?.toString() : "USD"
    return new Intl.NumberFormat("en", {style: "currency", currency: currency}).format(value)
}
