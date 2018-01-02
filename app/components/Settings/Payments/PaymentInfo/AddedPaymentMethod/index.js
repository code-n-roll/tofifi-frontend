import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaVisa from 'react-icons/lib/fa/cc-visa';
import RaisedButton from 'material-ui/RaisedButton';

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
            <RaisedButton
              label="Delete"
              primary={true}
              onClick={this.props.onRemoveCardClick}
            />
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
