import {
  FETCH_STORES_REQUEST,
  FETCH_STORES_SUCCESS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  CREATE_STORE_ORDER_REQUEST
} from '../constants';

export const fetchStoresRequest = () => ({
  type: FETCH_STORES_REQUEST
});

export const fetchStoresSuccess = (data) => ({
  type: FETCH_STORES_SUCCESS,
  data
});

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST
});

export const fetchCategoriesSuccess = (data) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  data
});

export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST
});

export const fetchItemsSuccess = (data) => ({
  type: FETCH_ITEMS_SUCCESS,
  data
});

export const createStoreOrderRequest = (data) => ({
  type: CREATE_STORE_ORDER_REQUEST,
  data
});
