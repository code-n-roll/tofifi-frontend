import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import FaCheck from 'react-icons/lib/fa/check';
import Checkbox from 'components/Checkbox';

const GroupItem = (props) => (
  <div className="create-purchase_group-item" onClick={() => props.onClick(props)}>
    <Avatar name={props.name} round size={30} />
    <span className="create-purchase_group-item__name">{props.name}</span>
  </div>
);

GroupItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default GroupItem;
