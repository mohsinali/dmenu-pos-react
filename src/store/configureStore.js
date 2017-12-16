import {createStore, combineReducers} from 'redux';
import categoryReducer from '../reducers/categories';
import TableNumber_Reducer from '../reducers/TableNumber_Reducer';

export default () => {
  const store = createStore(
    combineReducers({
      categories: categoryReducer,
      table_number: TableNumber_Reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}