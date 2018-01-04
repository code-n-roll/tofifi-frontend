import { combineReducers } from 'redux-immutable';
import purchasesReducer from './purchases';
import storesReducer from './stores';
import pageStateReducer from './pageState';
import debtorsStatisticsReducer from './debtors';

export default combineReducers({
  purchases: purchasesReducer,
  pageState: pageStateReducer,
  stores: storesReducer,
  debtors: debtorsStatisticsReducer,
});
