import { createSelector } from 'reselect';

const selectDebt = (state) => state.get('common').get('debt');

const makeSelectDebtModalState = () => createSelector(
  selectDebt,
  (commonState) => commonState.get('debtModalOpened'),
);

const makeSelectUser = () => createSelector(
  selectDebt,
  (commonState) => commonState.get('user'),
);

const makeSelectDebtError = () => createSelector(
  selectDebt,
  (commonState) => commonState.get('error'),
);

export {
  makeSelectDebtModalState,
  makeSelectUser,
  makeSelectDebtError,
};
