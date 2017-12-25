import { createSelector } from 'reselect';

const selectCommon = (state) => state.get('common');

const makeSelectLoaderStatus = () => createSelector(
  selectCommon,
  (commonState) => commonState.get('isLoading')
);

const makeSelectUsers = () => createSelector(
  selectCommon,
  (commonState) => commonState.get('users').toJS()
);

const makeSelectGroups = () => createSelector(
  selectCommon,
  (commonState) => commonState.get('groups').toJS()
);

const makeSelectGroupUsers = () => createSelector(
  selectCommon,
  (commonState) => {
    const groupUsersState = commonState.get('groupUsers');
    return {
      groupId: groupUsersState.get('groupId'),
      users: groupUsersState.get('users').toJS(),
    };
  }
);

const makeSelectGroupModalState = () => createSelector(
  selectCommon,
  (commonState) => commonState.get('groupModalOpened')
);


export {
  makeSelectLoaderStatus,
  makeSelectUsers,
  makeSelectGroups,
  makeSelectGroupUsers,
  makeSelectGroupModalState,
};
