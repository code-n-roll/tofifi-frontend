import { fromJS, List } from 'immutable';
import {
  SET_PURCHASES_DATA,
  SET_CURRENT_PURCHASE,
  SET_PENDING_PURCHASE,
  SET_PENDING_PURCHASE_PARTICIPANTS,
  UPDATE_PURCHASE,
  SUBMIT_STORE_ORDER_SUCCESS,
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
    case UPDATE_PURCHASE: {
      const purchases = state.get('purchases');
      const { newPurchase } = action;
      const purchaseIndex = purchases.findIndex((p) => p.id === newPurchase.id);
      if (purchaseIndex === -1) return state;

      return state
        .set('purchases', purchases.set(purchaseIndex, newPurchase));
    }
    case SUBMIT_STORE_ORDER_SUCCESS: {
      const purchases = state.get('purchases');
      const { purchaseId } = action;

      const purchaseIndex = purchases.findIndex((p) => p.id === purchaseId);
      if (purchaseIndex === -1) return state;

      const purchase = purchases.get(purchaseIndex);
      return state
        .set('purchases', purchases.set(purchaseIndex,
            purchase.set('storeOrder',
              purchase.get('storeOrder')
                .set('isSubmitted', true))));
    }
    default:
      return state;
  }
}

export default purchasesReducer;
