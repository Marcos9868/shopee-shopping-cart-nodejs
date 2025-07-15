async function addItem(userCart, item) {
  userCart.push(item);
}

async function remoteItemCart(userCart, idCart) {

}

async function deleteItem(userCart, name) {

} 

async function calculateTotalItems(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  return result;
}

export {
  addItem,
  remoteItemCart,
  deleteItem,
  calculateTotalItems
}