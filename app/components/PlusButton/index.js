import React from 'react';
import FaPlus from 'react-icons/lib/fa/plus';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PlusButton = (props) => (
  <Link to={props.goToRoute} className="plus-button">
    <span >
      +
    </span>
  </Link>
);

PlusButton.propTypes = {
  goToRoute: PropTypes.string,
};

export default PlusButton;
