import { fromJS, List } from 'immutable';

import {
  FETCH_STORES_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_ITEMS_SUCCESS
} from '../constants';

const initialState = fromJS({
  stores: [],
  categories: [],
  items: [],
});

export default function storesReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_STORES_SUCCESS:
      return state
        .set('stores', new List(action.data));
    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', new List(action.data));
    case FETCH_ITEMS_SUCCESS:
      return state
        .set('items', new List(action.data));
    default:
      return state;
  }
}
