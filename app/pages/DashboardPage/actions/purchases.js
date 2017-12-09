import {
  GET_PURCHASES_REQUEST,
  SET_PURCHASES_DATA,
  SET_CURRENT_PURCHASE,
} from '../constants';

export function getPurchasesRequest() {
  return {
    type: GET_PURCHASES_REQUEST,
  };
}

export function setPurchasesData(data) {
  return {
    type: SET_PURCHASES_DATA,
    data,
  };
}

export function setCurrentPurchase(data) {
  return {
    type: SET_CURRENT_PURCHASE,
    data,
  };
}
