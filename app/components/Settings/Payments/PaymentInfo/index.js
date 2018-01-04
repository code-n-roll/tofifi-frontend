import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

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
          <RaisedButton
            label= {buttonText}
            primary={true}
            onClick={this.props.onChangeCardClick}
          />
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
