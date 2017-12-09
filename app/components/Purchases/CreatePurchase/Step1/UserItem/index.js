import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import Checkbox from 'components/Checkbox';

const UserItem = (props) => (
  <div className="create-purchase_user-item">
    <Avatar email={props.email} size={30} round style={{ marginRight: 10 }}/>
    <span className="create-purchase_user-item__username">{props.username}</span>
    <div className="create-purchase_user-item__checkbox">
      <Checkbox
        id={`create-purchase-user-${props.id}`}
        checked={props.selected}
        onChange={props.onStatusChange}
      />
    </div>
  </div>
);

UserItem.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  selected: PropTypes.bool,
  onStatusChange: PropTypes.func,
};

export default UserItem;
