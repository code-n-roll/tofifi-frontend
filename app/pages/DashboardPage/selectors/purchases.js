import { createSelector } from 'reselect';
import _ from 'lodash';

import selectDashboard from './dashboard';

const selectPurchases = (state) => selectDashboard(state).get('purchases');

const makeSelectPurchasesList = () => createSelector(
  selectPurchases,
  (purchasesState) => purchasesState.get('purchases').toJS()
);

const makeSelectCurrentPurchase = () => createSelector(
  selectPurchases,
  (purchasesState) => {
    const purchases = purchasesState.get('purchases').toJS();
    const currentPurchaseId = purchasesState.get('currentPurchase');
    return _.find(purchases, (purchase) => purchase.id === currentPurchaseId);
  }
);

const makeSelectPendingPurchase = () => createSelector(
  selectPurchases,
  (purchasesState) => purchasesState.get('pendingPurchase')
);

export {
  makeSelectPurchasesList,
  makeSelectCurrentPurchase,
  makeSelectPendingPurchase,
};
