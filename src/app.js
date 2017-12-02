import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import TopNav from './components/TopNav';



const store = configureStore();

store.dispatch({type: 'ADD_CATEGORY', category: {id: 25, name: "Pakistani"}});
store.dispatch({type: 'ADD_CATEGORY', category: {id: 26, name: "Steaks"}});

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(<TopNav />, document.getElementById('top-nav'));