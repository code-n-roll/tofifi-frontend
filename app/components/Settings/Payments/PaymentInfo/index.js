import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddedPaymentMethod from './AddedPaymentMethod';
import './styles.css';

class PaymentInfo extends Component {
  state = {  }
  render() {
    let { cardDigits } = this.props;

    let buttonText = cardDigits
      ? 'Change payment method'
      : 'Add payment method';
    return (
      <div className="payment-methods-info">
        {
          cardDigits ?
          (
            <AddedPaymentMethod
              cardDigits={cardDigits}
              onRemoveCardClick={this.props.onRemoveCardClick}
            />
          ) :
          (
            <div className="payment-methods-info_no-cards">
              No payment methods
            </div>
          )
        }
        <div>
          <button
            className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white"
            onClick={this.props.onChangeCardClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

PaymentInfo.propTypes = {
  cardDigits: PropTypes.string,
  onChangeCardClick: PropTypes.func.isRequired,
  onRemoveCardClick: PropTypes.func.isRequired,
};

export default PaymentInfo;
