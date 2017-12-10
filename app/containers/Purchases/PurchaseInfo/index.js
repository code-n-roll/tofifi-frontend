import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaCreditCard from 'react-icons/lib/fa/credit-card';
import creditCardImage from './credit-card.png';
class PurchaseInfo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="purchase-info-container">
        <div className="purchase-info_credit-card-container">
          <img src={creditCardImage} />
          <span className="purchase-info_credit-card__owner">Anton Dacik</span>
        </div>
        <div className="purchase-info_amount">
          Amount: 100$
        </div>
        <div className="purchase-info_buttons">
          <button className="mdl-button mdl-js-button mdl-button--raised" style={{ marginRight: 40 }}> DECLINE </button>
          <button className="mdl-button mdl-js-button mdl-button--raised bg-green text-white"> PAY </button>
        </div>
      </div>
    );
  }
}

export default PurchaseInfo;
