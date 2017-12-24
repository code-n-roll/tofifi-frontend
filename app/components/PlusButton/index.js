import React from 'react';
import PropTypes from 'prop-types';

const PlusButton = (props) => (
  <button onClick={props.onClick} className="plus-button">
    <span >
      +
    </span>
  </button>
);

PlusButton.propTypes = {
  onClick: PropTypes.func,
};

export default PlusButton;
