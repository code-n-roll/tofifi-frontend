import { put, call, select } from 'redux-saga/effects';
import { getPurchasesApi, createPurchaseApi } from 'utils/api/requests';
import { createPurchase as createPurchaseAction } from 'components/forms/PurchaseForm/actions';
import { browserHistory } from 'react-router';
import { processPurchaseFormDataApi } from './helpers';
import { setPurchasesData, setPendingPurchase } from '../actions';
import { GET_PURCHASES_REQUEST } from '../constants';
import { makeSelectPendingPurchase, makeSelectPurchasesList } from '../selectors';

function* getPurchasesData() {
  const response = yield call(getPurchasesApi);

  yield put(setPurchasesData(response.data));
}

function* createPurchase(action) {
  const formData = action.payload.toJS();
  const pendingPurchase = yield select(makeSelectPendingPurchase());
  const purchaseData = processPurchaseFormDataApi(formData);
  purchaseData.name = pendingPurchase.name;
  const response = yield call(createPurchaseApi, purchaseData);
  purchaseData.id = response.data.id;
  purchaseData.isOwner = true;
  yield put(createPurchaseAction.success());
  const purchasesList = yield select(makeSelectPurchasesList());

  purchasesList.unshift(purchaseData);
  yield put(setPurchasesData(purchasesList));
  browserHistory.push(`/?purchase=${purchaseData.id}`);
  yield put(setPendingPurchase(null));
}

export default {
  getPurchases: { actionType: GET_PURCHASES_REQUEST, handler: getPurchasesData },
  createPurchase: { actionType: createPurchaseAction.REQUEST, handler: createPurchase },
};
