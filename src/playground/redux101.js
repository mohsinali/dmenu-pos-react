import { createStore } from 'redux';


const categoryReducerDefaultState = [];

const categoryReducer = (state = categoryReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_CATEGORY':
      return [
        ...state,
        action.category
      ];

    default:
      return {
        tip: 0
      }
  }  
}

const store = createStore(categoryReducer);
store.dispatch({type: 'ADD_CATEGORY', category: {id: 25, name: "Pakistani"}});
store.dispatch({type: 'ADD_CATEGORY', category: {id: 26, name: "Steaks"}});

console.log(store.getState());