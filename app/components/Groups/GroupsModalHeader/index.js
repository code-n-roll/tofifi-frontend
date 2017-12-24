import React from 'react';
import PropTypes from 'prop-types';

const GroupsModalHeader = (props) => (
  <div className="groupsModalHeader_container">
    <span className="groupsModalHeader_title">{props.title}</span>
    <span onClick={props.onCancelClick} className="groupsModalHeader_close">Close</span>
  </div>
);

GroupsModalHeader.propTypes = {
  title: PropTypes.string,
  onCancelClick: PropTypes.func,
};

export default GroupsModalHeader;
