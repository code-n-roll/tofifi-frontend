import * as ActionTypes from '../constants';
import { takeEvery, put, select } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { fetchStoresRequest, fetchStoresSuccess } from '../actions';
import { getStoresApi, createStoreOrderApi } from 'utils/api/requests';
import { setPurchasesData, setPendingPurchase, setPendingPurchaseParticipants } from '../actions';
import {
  makeSelectPendingPurchase,
  makeSelectPurchasesList,
  makeSelectPendingPurchaseParticipants
} from '../selectors';

function* fetchStores(action) {
  // const response = yield getStoresApi();
  console.log('fetch stores');
  yield put(fetchStoresSuccess([
    {
      id: 1,
      name: 'Sbarro'
    },
    {
      id: 2,
      name: 'Pzz'
    }
  ]));
}

function* createStoreOrder(action) {
  const storeId = action.storeId;

  const pendingPurchaseParticipants = yield select(makeSelectPendingPurchaseParticipants());
  const pendingPurchase = yield select(makeSelectPendingPurchase());

  const reqData = {
    name: pendingPurchase.name,
    storeId,
    userIds: pendingPurchaseParticipants
  };

  console.log(reqData);

  // const response = yield call(createStoreOrderApi, reqData);
  const purchasesList = yield select(makeSelectPurchasesList());
  // purchasesList.unshift(response.data);
  purchasesList.unshift({
    "totalSum": null,
    "isPayedOff": false,
    "users": [
        {
            "userId": 2,
            "username": "vlad1234@gmail.com",
            "sum": null,
            "status": 0
        },
        {
            "userId": 3,
            "username": "vlad12345@gmail.com",
            "sum": null,
            "status": 0
        }
    ],
    "id": 2131232,
    "name": "Store order",
    "createdAt": "2017-12-24T15:34:59.7292428+03:00",
    "isOwner": true,
    "purchaseType": 1
  });
  yield put(setPurchasesData(purchasesList));
  browserHistory.push(`/?purchase=${2131232}`);
  yield put(setPendingPurchase(null));
  yield put(setPendingPurchaseParticipants(null));
}

export default {
  fetchStores: { actionType: ActionTypes.FETCH_STORES_REQUEST, handler: fetchStores },
  createStoreOrder: { actionType: ActionTypes.CREATE_STORE_ORDER_REQUEST, handler: createStoreOrder },
}
