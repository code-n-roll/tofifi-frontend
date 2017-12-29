import { fromJS, List } from 'immutable';

import {
  FETCH_STORES_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_ITEMS_SUCCESS,
  FETCH_STORE_CONTENT_SUCCESS,
  UPDATE_CHOOSED_ITEMS,
} from '../constants';

const initialState = fromJS({
  stores: [],
  categories: [],
  items: [],
  choosedItems: List(),
});

export default function storesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORES_SUCCESS:
      return state
        .set('stores', new List(action.data));
    case FETCH_STORE_CONTENT_SUCCESS:
      return state
        .set('storeContent', action.data);
    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', new List(action.data));
    case FETCH_ITEMS_SUCCESS:
      return state
        .set('items', new List(action.data));
    case UPDATE_CHOOSED_ITEMS:
      return state
        .set('choosedItems', new List(action.items));
    default:
      return state;
  }
}
