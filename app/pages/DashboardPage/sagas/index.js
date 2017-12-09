import { takeEvery } from 'redux-saga/effects';

import purchasesSagas from './purchases';

function* dashboardWatcherSaga() {
  yield takeEvery(purchasesSagas.getPurchases.actionType, purchasesSagas.getPurchases.handler);
}

export default [
  dashboardWatcherSaga,
];
