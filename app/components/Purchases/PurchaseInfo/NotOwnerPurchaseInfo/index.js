import React from 'react';
import PropTypes from 'prop-types';
import creditCardImage from './credit-card.png';

const NotOwnerPurchaseInfo = (props) => (
  <div className="purchase-info-container">
    <div className="purchase-info-centered">
      <div className="purchase-info_credit-card-container">
        <img src={creditCardImage} role="presentation" />
        { /* <span className="purchase-info_credit-card__owner">Anton Dacik</span> */ }
      </div>
      <div className="purchase-info_amount">
        Amount: {props.sum} $
      </div>
    </div>
    <div className="purchase-info_buttons">
      <button
        className="mdl-button mdl-js-button mdl-button--raised"
        style={{ marginRight: 40 }}
        onClick={props.onDeclineClick}
      >
        DECLINE
      </button>
      <button
        className="mdl-button mdl-js-button mdl-button--raised bg-green text-white"
        onClick={props.onPayClick}
      >
        PAY
      </button>
    </div>
  </div>
);

NotOwnerPurchaseInfo.propTypes = {
  sum: PropTypes.number,
  onPayClick: PropTypes.func,
  onDeclineClick: PropTypes.func,
};

export default NotOwnerPurchaseInfo;
