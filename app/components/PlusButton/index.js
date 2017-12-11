import React from 'react';
import FaPlus from 'react-icons/lib/fa/plus';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PlusButton = (props) => (
  <button onClick={props.onClick} className="plus-button">
    <span >
      +
    </span>
  </button>
);

PlusButton.propTypes = {
  onClick: PropTypes.onClick,
};

export default PlusButton;
