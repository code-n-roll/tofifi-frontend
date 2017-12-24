import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import Checkbox from 'components/Checkbox';

import './styles.css';

const UserItem = (props) => {
  let avatar;

  if (!props.avatarUrl) {
    avatar = <Avatar name={props.username} size={50} round className="avatar" />;
  } else {
    avatar = <img src={props.avatarUrl} alt="Avatar" className="avatar" />;
  }

  return (<div className="create-purchase_user-item">
    {avatar}
    <span className="create-purchase_user-item__username">{props.username}</span>
    <div className="create-purchase_user-item__checkbox">
      <Checkbox
        id={`create-purchase-user-${props.id}`}
        checked={props.selected}
        onChange={props.onStatusChange}
      />
    </div>
  </div>);
};

UserItem.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  id: PropTypes.number,
  selected: PropTypes.bool,
  onStatusChange: PropTypes.func,
};

export default UserItem;
