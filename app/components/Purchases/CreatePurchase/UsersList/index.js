import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../UserItem';

const UsersList = (props) => (
  <div>
    {props.users.map((user) => (
      <UserItem {...user} onStatusChange={() => props.onUserStatusChange(user.id, !user.selected)} />
    ))}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
