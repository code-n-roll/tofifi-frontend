import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaVisa from 'react-icons/lib/fa/cc-visa';

import './styles.css';

class AddedPaymentMethod extends Component {
  state = {  }
  render() {
    return (
        <div className="payment-info">
          <div style={{ marginRight: 5 }}>
            <FaVisa className="card-icon" />
            <span>****{ this.props.cardDigits }</span>
          </div>
          <div>
            <button
              className="mdl-button payment-info__delete"
              onClick={this.props.onRemoveCardClick}
            >
              Delete
            </button>
          </div>
        </div>
    );
  }
}

AddedPaymentMethod.PropTypes = {
  cardDigits: PropTypes.string,
  onRemoveCardClick: PropTypes.func,
};

export default AddedPaymentMethod;
