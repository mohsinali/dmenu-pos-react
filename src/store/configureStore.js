import {createStore} from 'redux';
import categoryReducer from '../reducers/categories';

export default () => {
  const store = createStore(categoryReducer);

  return store;
}