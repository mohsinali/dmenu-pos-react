const cartReducerDefaultState = [];

export default (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      if(state.length === 0){
        return [
          ...state,
          action.item
        ]
      }else{
        let item = state.find((item) => item.product_id === action.item.product_id);
        if(item === undefined){
          return [
            ...state,
            action.item
          ]
        }else{          
          return state.map((item) => {
            if(item.product_id === action.item.product_id){              
              return {
                product_id: item.product_id,
                name: item.name,
                quantity: item.quantity + 1,
                price: item.price,
              }
            }else{
              return item;
            }
          });
        }
      }
      break;
  
    default:
      return state;
  }
};