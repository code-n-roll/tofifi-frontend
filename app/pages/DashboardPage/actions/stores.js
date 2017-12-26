import * as ActionTypes from '../constants';

export const fetchStoresRequest = () => ({
  type: ActionTypes.FETCH_STORES_REQUEST,
});

export const fetchStoresSuccess = (data) => ({
  type: ActionTypes.FETCH_STORES_SUCCESS,
  data,
});

export const fetchStoreContentRequest = (storeId) => ({
  type: ActionTypes.FETCH_STORE_CONTENT_REQUEST,
  storeId,
});

export const fetchStoreContentSuccess = (data) => ({
  type: ActionTypes.FETCH_STORE_CONTENT_SUCCESS,
  data,
});

export const fetchCategoriesRequest = () => ({
  type: ActionTypes.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (data) => ({
  type: ActionTypes.FETCH_CATEGORIES_SUCCESS,
  data,
});

export const fetchItemsRequest = () => ({
  type: ActionTypes.FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (data) => ({
  type: ActionTypes.FETCH_ITEMS_SUCCESS,
  data,
});

export const createStoreOrderRequest = (storeId) => ({
  type: ActionTypes.CREATE_STORE_ORDER_REQUEST,
  storeId,
});

export const updateStoreOrderRequest = () => ({
  type: ActionTypes.UPDATE_STORE_ORDER_REQUEST,
});

export const updateStoreOrderSuccess = (orderId, data) => ({
  type: ActionTypes.UPDATE_STORE_ORDER_SUCCESS,
  orderId,
  data,
});

export const submitStoreOrderRequest = () => ({
  type: ActionTypes.SUBMIT_STORE_ORDER_REQUEST,
});

export const submitStoreOrderSuccess = (orderId) => ({
  type: ActionTypes.SUBMIT_STORE_ORDER_SUCCESS,
  orderId,
});
