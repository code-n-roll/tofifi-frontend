import { combineReducers } from 'redux-immutable';
import usersReducer from './users';
import groupsReducer from './groups';
import commonReducer from './common';
import debtReducer from './debt';

export default combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  common: commonReducer,
  debt: debtReducer,
});
