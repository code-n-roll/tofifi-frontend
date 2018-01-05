import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import Checkbox from 'components/Checkbox';
import ellipsisText from 'helpers/ellipsisText';

import './styles.css';

const UserItemWithCheckbox = (props) => {
  return (
    <div className="user-item">
      <div className="user-item-avatar">
        <Avatar username={props.username} avatarUrl={props.avatarUrl} />
      </div>
      <span className="user-item__username">{ellipsisText(props.username, 20)}</span>
      <div className="user-item__checkbox">
        <Checkbox
          id={`${props.keyPrefix}-user-${props.id}`}
          checked={props.selected}
          onChange={props.onStatusChange}
        />
      </div>
    </div>
  );
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
