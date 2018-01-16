const cartReducerDefaultState = [];

export default (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return [
        ...state,
        action.item
      ]
      break;
  
    default:
      return state;
  }
};