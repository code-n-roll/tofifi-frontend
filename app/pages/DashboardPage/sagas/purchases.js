import { put, call, select } from 'redux-saga/effects';
import { getPurchasesApi, createPurchaseApi } from 'utils/api/requests';
import { createPurchase as createPurchaseAction } from 'components/forms/PurchaseForm/actions';
import { browserHistory } from 'react-router';
import { processPurchaseFormDataApi } from './helpers';
import { setPurchasesData, setPendingPurchase, setPendingPurchaseParticipants } from '../actions';
import { GET_PURCHASES_REQUEST } from '../constants';
import {
  makeSelectPendingPurchase,
  makeSelectPurchasesList,
  makeSelectPendingPurchaseParticipants
} from '../selectors';

function* getPurchasesData() {
  const response = yield call(getPurchasesApi);

  yield put(setPurchasesData(response.data));
}

function* createPurchase(action) {
  const formData = action.payload.toJS();

  const pendingPurchaseParticipants = yield select(makeSelectPendingPurchaseParticipants());
  const pendingPurchase = yield select(makeSelectPendingPurchase());
  pendingPurchaseParticipants.forEach((pId) => {
    if (!formData.users[pId]) {
      formData.users[pId] = { sum: null };
    }
  });

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

export default {
  getPurchases: { actionType: GET_PURCHASES_REQUEST, handler: getPurchasesData },
  createPurchase: { actionType: createPurchaseAction.REQUEST, handler: createPurchase },
};
