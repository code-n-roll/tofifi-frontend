import { takeEvery } from 'redux-saga/effects';

import purchasesSagas from './purchases';

function* dashboardWatcherSaga() {
  yield takeEvery(purchasesSagas.getPurchases.actionType, purchasesSagas.getPurchases.handler);
  yield takeEvery(purchasesSagas.createPurchase.actionType, purchasesSagas.createPurchase.handler);
  yield takeEvery(purchasesSagas.payPurchase.actionType, purchasesSagas.payPurchase.handler);
  yield takeEvery(purchasesSagas.declinePurchase.actionType, purchasesSagas.declinePurchase.handler);
}

export default [
  dashboardWatcherSaga,
];
