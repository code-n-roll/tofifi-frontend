import { createSelector } from 'reselect';

import selectDashboard from './dashboard';

const selectPageState = (state) => selectDashboard(state).get('pageState');

const makeSelectPageState = () => createSelector(
  selectPageState,
  (pageState) => pageState.get('state')
);

export {
  makeSelectPageState,
};
