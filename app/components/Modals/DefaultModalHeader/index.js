import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close';

const DefaultModalHeader = (props) => (
  <div className="defaultModalHeader_container">
    <span className="defaultModalHeader_title">{props.title}</span>

    <span className="defaultModalHeader_close" onClick={props.onCloseClick}>
          <FaClose size={19} color='white' />
    </span>
  </div>
);

DefaultModalHeader.propTypes = {
  title: PropTypes.string,
  onCloseClick: PropTypes.func,
};

export default DefaultModalHeader;
