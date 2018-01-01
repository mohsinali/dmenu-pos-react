import {createStore, combineReducers} from 'redux';
import categoryReducer from '../reducers/categories';
import TableNumber_Reducer from '../reducers/TableNumber_Reducer';
import SelectedCategory_Reducer from '../reducers/SelectedCategory_Reducer';

export default () => {
  const store = createStore(
    combineReducers({
      categories: categoryReducer,
      selected_category: SelectedCategory_Reducer,
      table_number: TableNumber_Reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}