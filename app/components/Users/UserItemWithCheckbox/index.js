import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import Checkbox from 'components/Checkbox';

import './styles.css';

const UserItemWithCheckbox = (props) => {
  let avatar;

  if (!props.avatarUrl) {
    avatar = <Avatar name={props.username} size={50} round className="user-item-avatar" />;
  } else {
    avatar = <img src={props.avatarUrl} alt="Avatar" className="user-item-avatar" />;
  }

  return (<div className="user-item">
    {avatar}
    <span className="user-item__username">{props.username}</span>
    <div className="user-item__checkbox">
      <Checkbox
        id={`user-${props.id}`}
        checked={props.selected}
        onChange={props.onStatusChange}
      />
    </div>
  </div>);
};

UserItemWithCheckbox.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  id: PropTypes.number,
  selected: PropTypes.bool,
  onStatusChange: PropTypes.func,
};

export default UserItemWithCheckbox;
