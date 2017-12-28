import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrderTotalInfo from '../OrderTotalInfo';

class SubmittedOrderInfo extends Component {
  render() {
    return (
      <div>
        <OrderTotalInfo userOrders={this.props.userOrders} />
      </div>
    );
  }
}

SubmittedOrderInfo.propTypes = {
  userOrders: PropTypes.array.isRequired
}

export default SubmittedOrderInfo;
