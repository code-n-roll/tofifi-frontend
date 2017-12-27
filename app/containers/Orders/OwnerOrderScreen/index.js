import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrderInProgressScreen from './components/OrderInProgressScreen';
import SubmittedOrderInfo from './components/SubmittedOrderInfo';

class OwnerOrderScreen extends Component {
  render() {
    const { purchase } = this.props;
    return (
      purchase.storeOrder.isSubmitted
        ? <SubmittedOrderInfo users={purchase.users} />
        : <OrderInProgressScreen purchase={purchase} />
    );
  }
}

OwnerOrderScreen.propTypes = {
  purchase: PropTypes.object.isRequired,
};

export default OwnerOrderScreen;
