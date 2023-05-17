import { ICartItem, IProduct } from "./dataIO";

export function findColor(item: IProduct, index: number, cart: ICartItem[]) {
  return item.overrides.color.find(
    (color) => color.name === cart[index].overrides.color
  );
}

export function findStorage(item: IProduct, index: number, cart: ICartItem[]) {
  return item.overrides.storage.find(
    (storage) => storage.size === cart[index].overrides.size
  );
}

export function getQuantity(item: IProduct, index: number, cart: ICartItem[]) {
  const selectedItem = cart.find(
    (cartItem) =>
      cartItem.id === item.id &&
      cartItem.overrides.color === findColor(item, index, cart).name &&
      cartItem.overrides.size === findStorage(item, index, cart).size
  );
  return selectedItem.quantity;
}
