import React from 'react';
import PropTypes from 'prop-types';
import UserItemWithCheckbox from 'components/Users/UserItemWithCheckbox';

const SelectUsersList = (props) => (
  <div>
    {props.users.map((user) => (
      <UserItemWithCheckbox {...user} onStatusChange={() => props.onUserStatusChange(user, !user.selected)} />
    ))}
  </div>
);

SelectUsersList.propTypes = {
  users: PropTypes.array,
};

export default SelectUsersList;
