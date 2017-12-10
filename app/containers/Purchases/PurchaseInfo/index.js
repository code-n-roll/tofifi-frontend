import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentPurchase } from 'pages/DashboardPage/selectors';
import PropTypes from 'prop-types';
import OwnerPurchaseInfo from 'components/Purchases/PurchaseInfo/OwnerPurchaseInfo';
import NotOwnerPurchaseInfo from 'components/Purchases/PurchaseInfo/NotOwnerPurchaseInfo';

const PurchaseInfo = (props) => (
  props.purchase.isMy ? (
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
