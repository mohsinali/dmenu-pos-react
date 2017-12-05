import {createStore, combineReducers} from 'redux';
import categoryReducer from '../reducers/categories';

export default () => {
  const store = createStore(
    combineReducers({
      categories: categoryReducer
    })
  );

  return store;
}