import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchStoreContentRequest } from 'pages/DashboardPage/actions';
import { makeSelectCurrentPurchase } from 'pages/DashboardPage/selectors';
import OwnerOrderScreen from '../OwnerOrderScreen';
import ParticipantOrderScreen from '../ParticipantOrderScreen';

class StoreOrderInfo extends Component {
  componentWillMount() {
    this.props.fetchStoreContentRequest(this.props.purchase.storeOrder.storeId);
  }

  componentDidUpdate() {
    this.props.fetchStoreContentRequest(this.props.purchase.storeOrder.storeId);
  }

  render() {
    const { purchase } = this.props;
    return (
      purchase.isOwner ?
        <OwnerOrderScreen purchase={purchase} /> :
        <ParticipantOrderScreen purchase={purchase} />
    );
  }
}

StoreOrderInfo.propTypes = {
  purchase: PropTypes.object,

  fetchStoreContentRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  purchase: makeSelectCurrentPurchase(),
});

const mapDispatchToProps = {
  fetchStoreContentRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreOrderInfo);
