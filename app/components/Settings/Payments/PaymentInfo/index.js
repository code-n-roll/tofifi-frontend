import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddedPaymentMethod from './AddedPaymentMethod';

class PaymentInfo extends Component {
  state = {  }
  render() {
    let { cardDigits } = this.props;

    let buttonText = cardDigits
      ? 'Change payment method'
      : 'Add payment method';
    return (
      <div>
        {
          cardDigits
          ? <AddedPaymentMethod cardDigits={cardDigits}/>
          : <span>No payment methods</span>
        }
        <div>
          <button className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white"
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
  onChangeCardClick: PropTypes.func.isRequired
};

export default PaymentInfo;
