import selectDashboard from './dashboard';

const selectStores = (state) =>
  selectDashboard(state).get('stores');

export const selectStoresList = (state) =>
  selectStores(state).get('stores');

export const selectStoreContent = (state) =>
  selectStores(state).get('storeContent');

export const selectChoosedItems = (state) =>
  selectStores(state).get('choosedItems');

export const selectStoreItems = (state) =>
  selectStores(state).get('storeContentHash');

export const selectOrderJustSubmittedState = (state) =>
  selectStores(state).get('orderJustSubmitted');
