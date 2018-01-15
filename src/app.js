import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import TopNav from './components/TopNav';



const store = configureStore();

store.dispatch({type: 'ADD_CATEGORY', category: {id: 1, name: "Starters"}});
store.dispatch({type: 'ADD_CATEGORY', category: {id: 2, name: "Our Specialities"}});
store.dispatch({type: 'ADD_CATEGORY', category: {id: 3, name: "Soups"}});
store.dispatch({type: 'ADD_CATEGORY', category: {id: 4, name: "Salads"}});

store.dispatch({type: 'ADD_PRODUCT', product: {id: 1, name: 'Hot n Sour Soup(Single Red)', category_id: 3}});
store.dispatch({type: 'ADD_PRODUCT', product: {id: 2, name: 'Chicken Corn Soup(Single)', category_id: 3}});
store.dispatch({type: 'ADD_PRODUCT', product: {id: 3, name: 'Spicy Mexican Wings', category_id: 1}});
store.dispatch({type: 'ADD_PRODUCT', product: {id: 4, name: 'Fresh Green Salad', category_id: 4}});


// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(<TopNav />, document.getElementById('top-nav'));