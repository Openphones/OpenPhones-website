export interface ProductInfo {
    id: string;
    short_name: string;
    long_name: string;
    price: number;
    images: string[];
    quality: string;
    description: string;
    stock: boolean;
}

const currency = localStorage.getItem("currency") || "USD";

export const url = location.origin.endsWith(".onion") ? "http://nrnd5rs5aut37ny3vst42sj7a3v7xpw2y42k453gf6ibjlro5yjdpvyd.onion" : "https://api.openphones.global"

export const jsonLinks = fetch(`${url}/products?currency=${currency}`).then(r => r.json() as Promise<ProductInfo[]>)

export function currencyConvert(value: number) {
    return new Intl.NumberFormat("en", { style: "currency", currency: currency }).format(value)
}

const cartArray = JSON.parse(localStorage.getItem("cart")!)
export const cart = cartArray || []
