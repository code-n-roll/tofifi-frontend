import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';

const GroupsModalHeader = (props) => (
  <div className="groupsModalHeader_container">
    <span className="groupsModalHeader_title">{props.title}</span>

    <span className="groupsModalHeader_close" onClick={props.onCloseClick}>
          <FaClose size={19} color='white' />
    </span>
  </div>
);

GroupsModalHeader.propTypes = {
  title: PropTypes.string,
  onCloseClick: PropTypes.func,
};

export default GroupsModalHeader;
