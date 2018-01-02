import { createSelector } from 'reselect';

import selectDashboard from './dashboard';

const selectDebtors = (state) => selectDashboard(state).get('debtors');

const makeSelectDebtorsStatistics = () => createSelector(
  selectDebtors,
  (debtorsState) => debtorsState.get('statistic')
);

export {
  makeSelectDebtorsStatistics,
};
