import { put, call, select } from 'redux-saga/effects';
import {
  getPurchasesApi,
  createPurchaseApi,
  payPurchaseApi,
  declinePurchaseApi,
} from 'utils/api/requests';

import { createPurchase as createPurchaseAction } from 'components/forms/PurchaseForm/actions';
import { browserHistory } from 'react-router';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { processPurchaseFormDataApi } from './helpers';
import { setPurchasesData, setPendingPurchase, setPendingPurchaseParticipants } from '../actions';
import {
  makeSelectPendingPurchase,
  makeSelectPurchasesList,
  makeSelectPendingPurchaseParticipants,
} from '../selectors';
import { GET_PURCHASES_REQUEST, PAY_PURCHASE_REQUEST, DECLINE_PURCHASE_REQUEST } from '../constants';

function* getPurchasesData() {
  const response = yield call(getPurchasesApi);

  yield put(setPurchasesData(response.data));
}

function* createPurchase(action) {
  const formData = action.payload.toJS();

  const pendingPurchaseParticipants = yield select(makeSelectPendingPurchaseParticipants());
  const pendingPurchase = yield select(makeSelectPendingPurchase());
  const currentUser = yield select(makeSelectCurrentUser());

  pendingPurchaseParticipants.forEach((pId) => {
    if (!formData.users[pId]) {
      formData.users[pId] = { sum: null };
    }
  });

  if (formData.users[currentUser.id]) {
    delete formData.users[currentUser.id];
  }

  const purchaseData = processPurchaseFormDataApi(formData);
  purchaseData.name = pendingPurchase.name;
  const response = yield call(createPurchaseApi, purchaseData);
  const purchasesList = yield select(makeSelectPurchasesList());
  purchasesList.unshift(response.data);
  yield put(setPurchasesData(purchasesList));
  yield put(createPurchaseAction.success());
  browserHistory.push(`/?purchase=${response.data.id}`);
  yield put(setPendingPurchase(null));
  yield put(setPendingPurchaseParticipants(null));
}

function* payPurchase(action) {
  const purchaseId = action.data.purchaseId;
  const purchaseData = action.data.data;
  const response = yield call(payPurchaseApi, purchaseId, purchaseData);
}

function* declinePurchase(action) {
  const purchaseId = action.data.purchaseId;
  const response = yield call(declinePurchaseApi, purchaseId);
}

export default {
  getPurchases: { actionType: GET_PURCHASES_REQUEST, handler: getPurchasesData },
  createPurchase: { actionType: createPurchaseAction.REQUEST, handler: createPurchase },
  payPurchase: { actionType: PAY_PURCHASE_REQUEST, handler: payPurchase },
  declinePurchase: { actionType: DECLINE_PURCHASE_REQUEST, handler: declinePurchase },
};
