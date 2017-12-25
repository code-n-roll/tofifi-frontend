import { takeEvery, fork } from 'redux-saga/effects';

import purchasesSagas from './purchases';
import storesSaga from './stores';

function* dashboardWatcherSaga() {
  yield takeEvery(purchasesSagas.getPurchases.actionType, purchasesSagas.getPurchases.handler);
  yield takeEvery(purchasesSagas.createPurchase.actionType, purchasesSagas.createPurchase.handler);

  yield takeEvery(storesSaga.fetchStores.actionType, storesSaga.fetchStores.handler);
  yield takeEvery(storesSaga.createStoreOrder.actionType, storesSaga.createStoreOrder.handler);
}

export default [
  dashboardWatcherSaga,
];
