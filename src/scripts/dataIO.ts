export interface IProduct {
    id: string;
    long_name: string;
    short_name: string;
    description: string;
    price: number;
    quality: string;
    images: string[];
    stock: boolean;
    overrides: {
        color: {
            name: string
            color: string
            readable: string
        }[]
        storage: {
            size: number
            name: string
            price: number
            colorcomp: string[]
        }[]
    }
}

export interface ICartItem {
    id: string;
    quantity: number;
    overrides: {
        color: string
        size: number
    }
}

export function getURL(origin: string) {
    return origin.endsWith(".onion") ? "http://nrnd5rs5aut37ny3vst42sj7a3v7xpw2y42k453gf6ibjlro5yjdpvyd.onion" : "https://api.openphones.global"
}
export function getProducts(origin: string, currency: string) {
    return fetch(`${getURL(origin)}/products?currency=${currency}`).then(r => r.json() as Promise<IProduct[]>);
}

export function currencyConvert(value: number, currency: string) {
    return new Intl.NumberFormat("en", { style: "currency", currency: currency }).format(value);
}
