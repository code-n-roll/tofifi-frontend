import { takeEvery } from 'redux-saga/effects';

import purchasesSagas from './purchases';
import storesSaga from './stores';

function* dashboardWatcherSaga() {
  yield takeEvery(purchasesSagas.getPurchases.actionType, purchasesSagas.getPurchases.handler);
  yield takeEvery(purchasesSagas.createPurchase.actionType, purchasesSagas.createPurchase.handler);

  Object.keys(storesSaga).forEach(saga => {
    yield takeEvery(saga.actionType, saga.handler);
  });
}

export default [
  dashboardWatcherSaga,
];
