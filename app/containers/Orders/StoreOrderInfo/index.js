import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import { fetchStoreContentRequest } from 'pages/DashboardPage/actions';
import { makeSelectCurrentPurchase, makeSelectStoresLoading } from 'pages/DashboardPage/selectors';
import OwnerOrderScreen from '../OwnerOrderScreen';
import ParticipantOrderScreen from '../ParticipantOrderScreen';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

class StoreOrderInfo extends Component {
  componentWillMount() {
    this.props.fetchStoreContentRequest(this.props.purchase.storeOrder.storeId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.purchase.id !== prevProps.purchase.id) {
      this.props.fetchStoreContentRequest(this.props.purchase.storeOrder.storeId);
    }
  }

  render() {
    const { purchase, storesIsLoading } = this.props;

    if (storesIsLoading) {
      return (
        <div style={{ position: 'relative', height: '100%' }}>
          <RefreshIndicator
            size={50}
            left={70}
            top={0}
            loadingColor="#5682a3"
            status="loading"
            style={style.refresh}
          />
        </div>
      );
    }

    return (
      purchase.isOwner ?
        <OwnerOrderScreen purchase={purchase} /> :
        <ParticipantOrderScreen purchase={purchase} />
    );
  }
}

StoreOrderInfo.propTypes = {
  purchase: PropTypes.object,
  storesIsLoading: PropTypes.bool,
  fetchStoreContentRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  purchase: makeSelectCurrentPurchase(),
  storesIsLoading: makeSelectStoresLoading(),
});

const mapDispatchToProps = {
  fetchStoreContentRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreOrderInfo);
