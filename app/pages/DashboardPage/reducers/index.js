import { combineReducers } from 'redux-immutable';
import purchasesReducer from './purchases';
import pageStateReducer from './pageState';

export default combineReducers({
  purchases: purchasesReducer,
  pageState: pageStateReducer,
});
