import { put, select, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import {
  getStoresApi,
  createStoreOrderApi,
  updateStoreOrderApi,
  getStoreContentApi,
  submitStoreOrderApi,
} from 'utils/api/requests';
import * as ActionTypes from '../constants';
import {
  fetchStoresSuccess,
  fetchStoreContentSuccess,
  setPurchasesData,
  setPendingPurchase,
  setPendingPurchaseParticipants,
  updatePurchase,
  submitStoreOrderSuccess,
} from '../actions';
import {
  makeSelectPendingPurchase,
  makeSelectPurchasesList,
  makeSelectPendingPurchaseParticipants,
} from '../selectors';

function* fetchStores() {
  const response = yield call(getStoresApi);
  yield put(fetchStoresSuccess(response.data));
}

function* fetchStoreContent(action) {
  const response = yield call(getStoreContentApi, action.storeId);
  console.log(response);
  yield put(fetchStoreContentSuccess(response.data));
}

function* createStoreOrder(action) {
  const storeId = action.storeId;

  const pendingPurchaseParticipants = yield select(makeSelectPendingPurchaseParticipants());
  const pendingPurchase = yield select(makeSelectPendingPurchase());

  const reqData = {
    name: pendingPurchase.name,
    storeId,
    users: pendingPurchaseParticipants,
  };

  console.log(reqData);

  const response = yield call(createStoreOrderApi, reqData);
  const purchasesList = yield select(makeSelectPurchasesList());
  purchasesList.unshift(response.data);

  yield put(setPurchasesData(purchasesList));
  browserHistory.push(`/?purchase=${response.data.id}`);
  yield put(setPendingPurchase(null));
  yield put(setPendingPurchaseParticipants(null));
}

function* updateStoreOrder(action) {
  const { orderId, data } = action;

  const reqData = {
    items: data.map((item) => ({
      itemId: item.id,
      number: item.amount,
      price: item.sum,
    })),
  };

  const response = yield call(updateStoreOrderApi, orderId, reqData);

  const purchase = response.data;
  console.log(purchase);
  yield put(updatePurchase(purchase));
}

function* submitStoreOrder(action) {
  const { orderId } = action;
  console.log(orderId);

  yield call(submitStoreOrderApi, orderId);
  yield put(submitStoreOrderSuccess(orderId));
}

export default {
  fetchStores: { actionType: ActionTypes.FETCH_STORES_REQUEST, handler: fetchStores },
  fetchStoreContent: { actionType: ActionTypes.FETCH_STORE_CONTENT_REQUEST, handler: fetchStoreContent },
  createStoreOrder: { actionType: ActionTypes.CREATE_STORE_ORDER_REQUEST, handler: createStoreOrder },
  updateStoreOrder: { actionType: ActionTypes.UPDATE_STORE_ORDER_REQUEST, handler: updateStoreOrder },
  submitStoreOrder: { actionType: ActionTypes.SUBMIT_STORE_ORDER_REQUEST, handler: submitStoreOrder },
};
