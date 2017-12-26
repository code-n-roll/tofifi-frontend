import { takeEvery } from 'redux-saga/effects';

import purchasesSagas from './purchases';
import storesSaga from './stores';

function* dashboardWatcherSaga() {
  yield takeEvery(purchasesSagas.getPurchases.actionType, purchasesSagas.getPurchases.handler);
  yield takeEvery(purchasesSagas.createPurchase.actionType, purchasesSagas.createPurchase.handler);

  yield takeEvery(storesSaga.fetchStores.actionType, storesSaga.fetchStores.handler);
  yield takeEvery(storesSaga.fetchStoreContent.actionType, storesSaga.fetchStoreContent.handler);
  yield takeEvery(storesSaga.createStoreOrder.actionType, storesSaga.createStoreOrder.handler);
  yield takeEvery(storesSaga.updateStoreOrder.actionType, storesSaga.updateStoreOrder.handler);
}

export default [
  dashboardWatcherSaga,
];
