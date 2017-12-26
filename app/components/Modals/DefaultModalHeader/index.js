import React from 'react';
import PropTypes from 'prop-types';

const DefaultModalHeader = (props) => (
  <div className="defaultModalHeader_container">
    <span className="defaultModalHeader_title">{props.title}</span>
    <span onClick={props.onCloseClick} className="defaultModalHeader_close">Close</span>
  </div>
);

DefaultModalHeader.propTypes = {
  title: PropTypes.string,
  onCloseClick: PropTypes.func,
};

export default DefaultModalHeader;
