import React from 'react';
import FaPlus from 'react-icons/lib/fa/plus';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const AddPurchaseButton = () => (
  <Link to={'?createPurchase=true'}>
    <button
      className="mdl-button mdl-js-button mdl-button--raised bg-green text-white add-purchase-btn"
    >
      <FaPlus />
    </button>
  </Link>
);

AddPurchaseButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddPurchaseButton;
