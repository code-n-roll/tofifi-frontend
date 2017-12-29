import React from 'react';
import PropTypes from 'prop-types';
import UserItemWithCheckbox from 'components/Users/UserItemWithCheckbox';

const SelectUsersList = (props) => (
  <div>
    {props.users.map((user) => (
      <UserItemWithCheckbox
        key={user.id}
        {...user}
        onStatusChange={() => props.onUserStatusChange(user, !user.selected)}
        keyPrefix={props.listItemsPrefix}
      />
    ))}
  </div>
);

SelectUsersList.propTypes = {
  users: PropTypes.array,
  listItemsPrefix: PropTypes.string,
};

export default SelectUsersList;
