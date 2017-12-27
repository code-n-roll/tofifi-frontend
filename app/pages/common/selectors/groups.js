import { createSelector } from 'reselect';

const selectGroups = (state) => state.get('common').get('groups');

const makeSelectGroups = () => createSelector(
  selectGroups,
  (commonState) => commonState.get('groups').toJS()
);

const makeSelectGroupModalState = () => createSelector(
  selectGroups,
  (commonState) => commonState.get('groupModalOpened')
);

export {
  makeSelectGroups,
  makeSelectGroupModalState,
};
