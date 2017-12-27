import { fromJS, List } from 'immutable';
import {
  SET_PURCHASES_DATA,
  SET_CURRENT_PURCHASE,
  SET_PENDING_PURCHASE,
  SET_PENDING_PURCHASE_PARTICIPANTS,
} from '../constants';

const initialState = fromJS({
  purchases: [],
  currentPurchase: null,
  pendingPurchase: null,
  pendingPurchaseParticipants: null,
});

function purchasesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PURCHASES_DATA:
      return state
        .set('purchases', new List(action.data));
    case SET_CURRENT_PURCHASE:
      return state
        .set('currentPurchase', action.data);
    case SET_PENDING_PURCHASE:
      return state
        .set('pendingPurchase', action.data);
    case SET_PENDING_PURCHASE_PARTICIPANTS:
      return state
        .set('pendingPurchaseParticipants', action.data);
    default:
      return state;
  }
}

export default purchasesReducer;
