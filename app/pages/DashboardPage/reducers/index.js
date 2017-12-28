import { combineReducers } from 'redux-immutable';
import purchasesReducer from './purchases';
import storesReducer from './stores';
import pageStateReducer from './pageState';

export default combineReducers({
  purchases: purchasesReducer,
  pageState: pageStateReducer,
  stores: storesReducer
});
