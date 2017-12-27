import {
  GET_PURCHASES_REQUEST,
  SET_PURCHASES_DATA,
  SET_CURRENT_PURCHASE,
  SET_PENDING_PURCHASE,
  SET_PENDING_PURCHASE_PARTICIPANTS,
  UPDATE_PURCHASE,
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

export function setPendingPurchase(data) {
  return {
    type: SET_PENDING_PURCHASE,
    data,
  };
}

export function setPendingPurchaseParticipants(data) {
  return {
    type: SET_PENDING_PURCHASE_PARTICIPANTS,
    data,
  };
}

export function updatePurchase(newPurchase) {
  return {
    type: UPDATE_PURCHASE,
    newPurchase,
  };
}
