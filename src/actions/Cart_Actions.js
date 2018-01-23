export const addCartItem = ({id, name, price}) => (
  {
    type: 'ADD_CART_ITEM',
    item: { product_id: id, name: name, quantity: 1, price: price}
  }
);

export const removeCartItem = (product_id) => (
  {
    type: 'REMOVE_CART_ITEM',
    product_id: product_id
  }
);