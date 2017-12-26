import * as ActionTypes from '../constants';
import { takeEvery, put, select, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { fetchStoresSuccess, fetchStoreContentSuccess } from '../actions';
import {
  getStoresApi,
  getStoreCategoriesApi,
  getStoreItemsApi,
  createStoreOrderApi,
  updateStoreOrderApi
} from 'utils/api/requests';
import {
  setPurchasesData,
  setPendingPurchase,
  setPendingPurchaseParticipants,

} from '../actions';
import {
  makeSelectPendingPurchase,
  makeSelectPurchasesList,
  makeSelectPendingPurchaseParticipants
} from '../selectors';

function* fetchStores(action) {
  const response = yield call(getStoresApi);
  console.log('fetch stores');
  yield put(fetchStoresSuccess(response.data));
}

function* fetchStoreContent(action) {
  // const response = yield getStoreContentApi(action.storeId);
  console.log('fetch store content');
  yield put(fetchStoreContentSuccess({
    name: 'Sbarro',
    categories: [
      {
        id: 8329341,
        name: 'Pizza',
        items: [
          {
            id: 43231,
            name: 'Yummy',
            description: 'fdasnfsdafklas fs',
            imageUrl: 'https://menu.by/resources/default/img/restaurant_products/small/1476972754-7857.jpeg',
            price: 15
          },
          {
            id: 43231,
            name: 'Yummy1321',
            description: 'fdasnfsdafklas fs',
            price: 25
          },
        ]
      },
      {
        id: 987,
        name: 'Coffee',
        items: [
          {
            id: 2321,
            name: 'Capuch',
            description: 'fdasnfsdafklas fs',
            price: 5
          },
          {
            id: 32,
            name: 'Latte',
            description: 'fdasnfsdafklas fs',
            price: 4
          },
        ]
      }
    ]
  }))
}

function* createStoreOrder(action) {
  const storeId = action.storeId;

  const pendingPurchaseParticipants = yield select(makeSelectPendingPurchaseParticipants());
  const pendingPurchase = yield select(makeSelectPendingPurchase());

  const reqData = {
    name: pendingPurchase.name,
    storeId,
    users: pendingPurchaseParticipants
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
  console.log(orderId, data);
  yield call(updateStoreOrderApi(orderId, data));
}

export default {
  fetchStores: { actionType: ActionTypes.FETCH_STORES_REQUEST, handler: fetchStores },
  fetchStoreContent: { actionType: ActionTypes.FETCH_STORE_CONTENT_REQUEST, handler: fetchStoreContent },
  createStoreOrder: { actionType: ActionTypes.CREATE_STORE_ORDER_REQUEST, handler: createStoreOrder },
  updateStoreOrder: { actionType: ActionTypes.UPDATE_STORE_ORDER_REQUEST, handler: updateStoreOrder },
}
