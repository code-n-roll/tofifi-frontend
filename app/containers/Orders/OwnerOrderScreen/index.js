import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchStoreContentRequest } from 'pages/DashboardPage/actions';
import OrderInProgressScreen from './components/OrderInProgressScreen';
import SubmittedOrderInfo from './components/SubmittedOrderInfo';

class OwnerOrderScreen extends Component {

  componentWillMount() {
    this.props.fetchStoreContentRequest(this.props.purchase.storeOrder.storeId);
  }

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

  fetchStoreContentRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchStoreContentRequest,
};

export default connect(() => ({}), mapDispatchToProps)(OwnerOrderScreen);
