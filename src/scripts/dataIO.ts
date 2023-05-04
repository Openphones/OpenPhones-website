export interface IProduct {
    id: string;
    long_name: string;
    short_name: string;
    description: string;
    price: number;
    quality: string;
    images: string[];
    stock: boolean;
}

export interface ICartItem {
    id: string;
    quantity: number;
}

const currency = localStorage.getItem("currency") || "USD";

export const url = location.origin.endsWith(".onion") ? "http://nrnd5rs5aut37ny3vst42sj7a3v7xpw2y42k453gf6ibjlro5yjdpvyd.onion" : "https://api.openphones.global"

export const products = fetch(`${url}/products?currency=${currency}`).then(r => r.json() as Promise<IProduct[]>)

export function currencyConvert(value: number) {
    return new Intl.NumberFormat("en", { style: "currency", currency: currency }).format(value)
}

export const cart = JSON.parse(localStorage.getItem("cart")) as ICartItem[] || new Array<ICartItem>();
