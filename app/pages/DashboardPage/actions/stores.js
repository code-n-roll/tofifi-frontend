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

export const updateStoreOrderRequest = (orderId, data) => ({
  type: ActionTypes.UPDATE_STORE_ORDER_REQUEST,
  orderId,
  data,
});

export const updateStoreOrderSuccess = () => ({
  type: ActionTypes.UPDATE_STORE_ORDER_SUCCESS,
});

export const submitStoreOrderRequest = (orderId) => ({
  type: ActionTypes.SUBMIT_STORE_ORDER_REQUEST,
  orderId,
});

export const submitStoreOrderSuccess = () => ({
  type: ActionTypes.SUBMIT_STORE_ORDER_SUCCESS,
});

export const updateChoosedItems = (items) => ({
  type: ActionTypes.UPDATE_CHOOSED_ITEMS,
  items,
});
