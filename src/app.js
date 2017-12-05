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

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(<TopNav />, document.getElementById('top-nav'));