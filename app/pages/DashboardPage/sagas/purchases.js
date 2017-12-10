import { put, call } from 'redux-saga/effects';
import { getPurchasesApi, createPurchaseApi } from 'utils/api/requests';
import { createPurchase as createPurchaseAction } from 'components/forms/PurchaseForm/actions';
import { processPurchaseFormDataApi } from './helpers';
import { setPurchasesData } from '../actions';
import purchasesData from './purchasesData';
import { GET_PURCHASES_REQUEST } from '../constants';

function* getPurchasesData() {
  // const response = yield call(getPurchasesApi);

  yield put(setPurchasesData(purchasesData));
}

function* createPurchase(action) {
  const formData = action.payload.toJS();
  // const response = yield call(createPurchaseApi, processPurchaseFormDataApi(formData));
  yield put(createPurchaseAction.success());
}

export default {
  getPurchases: { actionType: GET_PURCHASES_REQUEST, handler: getPurchasesData },
  createPurchase: { actionType: createPurchaseAction.REQUEST, handler: createPurchase },
};
