import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import './styles.css';

const GroupItem = (props) => (
  <div className="group-item" onClick={() => props.onClick(props)}>
    <Avatar name={props.name} round size={30} />
    <span className="group-item__name">{props.name}</span>
  </div>
);

GroupItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default GroupItem;
