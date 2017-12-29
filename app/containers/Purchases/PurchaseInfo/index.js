import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentPurchase } from 'pages/DashboardPage/selectors';
import CustomPurchaseInfo from 'containers/Purchases/CustomPurchaseInfo';
import StoreOrderInfo from 'containers/Orders/StoreOrderInfo';

const PurchaseInfo = (props) => {
  let purchaseScreen = null;

  if (props.purchase) {
    purchaseScreen = props.purchase.type === 'Store' ? (
      <StoreOrderInfo purchase={props.purchase} />
    ) : (
      <CustomPurchaseInfo purchase={props.purchase} />
    );
  } else {
    purchaseScreen = (
      <div><h3>### TODO Make beautiful text here ###</h3>Select purchase</div>
    );
  }

  return purchaseScreen;
};

PurchaseInfo.propTypes = {
  purchase: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  purchase: makeSelectCurrentPurchase(),
});

export default connect(mapStateToProps)(PurchaseInfo);
