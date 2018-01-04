import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MakeOrderComponent from '../MakeOrderComponent';
import SubmittedOrderInfo from './components/SubmittedOrderInfo';

class ParticipantOrderScreen extends Component {
  render() {
    const { purchase } = this.props;
    return (
      purchase.storeOrder.isSubmitted
        ? <SubmittedOrderInfo purchase={purchase} />
        : <MakeOrderComponent purchase={purchase} prevOrderItems={purchase.items} />
    );
  }
}

ParticipantOrderScreen.propTypes = {
  purchase: PropTypes.object.isRequired,
};

export default ParticipantOrderScreen;
