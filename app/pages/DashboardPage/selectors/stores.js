import selectDashboard from './dashboard';

const selectStores = (state) =>
  selectDashboard(state).get('stores');

export const selectStoresList = (state) =>
  selectStores(state).get('stores');

export const selectStoreContent = (state) =>
  selectStores(state).get('storeContent');
