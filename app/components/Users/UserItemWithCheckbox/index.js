import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import Checkbox from 'components/Checkbox';
import ellipsisText from 'helpers/ellipsisText';

import './styles.css';

const UserItemWithCheckbox = (props) => {
  let avatar;

  if (!props.avatarUrl) {
    avatar = <Avatar name={props.username} style={{ opacity: 0.5 }} size={50} round className="user-item-avatar" />;
  } else {
    avatar = <img src={props.avatarUrl} alt="Avatar" className="user-item-avatar" />;
  }

  return (<div className="user-item">
    {avatar}
    <span className="user-item__username">{ellipsisText(props.username, 20)}</span>
    <div className="user-item__checkbox">
      <Checkbox
        id={`${props.keyPrefix}-user-${props.id}`}
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
  keyPrefix: PropTypes.string,
};

export default UserItemWithCheckbox;
