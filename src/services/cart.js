async function addItem(userCart, item) {
  userCart.push(item);
}

async function remoteItemCart(userCart, idCart) {
  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  } 
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log("Item not found");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  } 

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
  }

}
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) userCart.splice(index, 1);
} 

async function calculateTotalItems(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  return result;
}

async function displayCart(userCart) {
  console.log("Shopee Cart List");
  userCart.forEach((item ,index) => console.log(`${index + 1} - ${item.name} - R${item.price}`));
}
export {
  addItem,
  remoteItemCart,
  deleteItem,
  calculateTotalItems,
  displayCart
}