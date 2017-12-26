import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrderInProgressScreen from './components/OrderInProgressScreen';
import SubmittedOrderInfo from './components/SubmittedOrderInfo';

class OwnerOrderScreen extends Component {
  state = {  }
  render() {
    let { purchase } = this.props;

    return (
      purchase.order.isSumbitted
        ? <SubmittedOrderInfo purchase={purchase} />
        : <OrderInProgressScreen purchase={purchase} />
    );
  }
}

OwnerOrderScreen.propTypes = {
  purchase: PropTypes.object.isRequired
};

export default OwnerOrderScreen;
