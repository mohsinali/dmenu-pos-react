export const addCartItem = ({id, name, price}) => (
  {
    type: 'ADD_CART_ITEM',
    item: { product_id: id, name: name, quantity: 1, price: price}
  }
);