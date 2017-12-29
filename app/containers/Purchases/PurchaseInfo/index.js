import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentPurchase } from 'pages/DashboardPage/selectors';
import CustomPurchaseInfo from 'containers/Purchases/CustomPurchaseInfo';
import StoreOrderInfo from 'containers/Orders/StoreOrderInfo';

const PurchaseInfo = (props) => (
  props.purchase.type === 'Store'
    ? <StoreOrderInfo purchase={props.purchase} />
    : <CustomPurchaseInfo purchase={props.purchase} />
);

PurchaseInfo.propTypes = {
  purchase: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  purchase: makeSelectCurrentPurchase(),
});

export default connect(mapStateToProps)(PurchaseInfo);
