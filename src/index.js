import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWishList = [];

const item1 = await createItem("Machenike Keyboard K500 B61", 129.99, 1);
const item2 = await createItem("Machenike Keyboard K500 B84", 159.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);

await cartService.displayCart(myCart);
await cartService.displayCart(myWishList);

await cartService.deleteItem(myCart, item1.name);
console.log("Shopee Cart Total Items");
const total = await cartService.calculateTotalItems(myCart);
const totalWishList = await cartService.calculateTotalItems(myWishList);
console.log(total);
console.log(totalWishList);
