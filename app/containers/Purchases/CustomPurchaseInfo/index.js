import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentPurchase } from 'pages/DashboardPage/selectors';
import OwnerPurchaseInfo from 'components/Purchases/PurchaseInfo/OwnerPurchaseInfo';
import NotOwnerPurchaseInfo from 'components/Purchases/PurchaseInfo/NotOwnerPurchaseInfo';

const PurchaseInfo = (props) => (
  props.purchase.isOwner ? (
    <OwnerPurchaseInfo {...props.purchase} />
  ) :
  (
    <NotOwnerPurchaseInfo {...props.purchase} />
  )
);

const mapStateToProps = createStructuredSelector({
  purchase: makeSelectCurrentPurchase(),
});

PurchaseInfo.propTypes = {
  purchase: PropTypes.object,
};

export default connect(mapStateToProps)(PurchaseInfo);
