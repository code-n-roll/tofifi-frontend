import { fromJS, List } from 'immutable';

import {
  FETCH_STORES_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_ITEMS_SUCCESS,
  FETCH_STORE_CONTENT_SUCCESS,
  UPDATE_CHOOSED_ITEMS,
  SET_ORDER_JUST_SUBMITTED_STATE,
} from '../constants';

const initialState = fromJS({
  stores: [],
  categories: [],
  items: [],
  choosedItems: List(),
  storeContent: [],
  storeContentHash: {},
  orderJustSubmitted: false,
});

export default function storesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORES_SUCCESS:
      return state
        .set('stores', new List(action.data));
    case FETCH_STORE_CONTENT_SUCCESS: {
      const storeContent = action.data;

      const storeContentHash = {};

      action.data.categories.forEach((category) => {
        category.items.forEach((item) => {
          storeContentHash[item.id] = item;
        });
      });

      return state
        .set('storeContent', storeContent)
        .set('storeContentHash', storeContentHash);
    }
    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', new List(action.data));
    case FETCH_ITEMS_SUCCESS:
      return state
        .set('items', new List(action.data));
    case UPDATE_CHOOSED_ITEMS:
      return state
        .set('choosedItems', new List(action.items));
    case SET_ORDER_JUST_SUBMITTED_STATE:
      return state
        .set('orderJustSubmitted', action.value);
    default:
      return state;
  }
}
