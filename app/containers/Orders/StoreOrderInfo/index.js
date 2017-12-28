import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentPurchase } from 'pages/DashboardPage/selectors';
import OwnerOrderScreen from '../OwnerOrderScreen';
import ParticipantOrderScreen from '../ParticipantOrderScreen';

const StoreOrderInfo = (props) =>
  props.purchase.isOwner ?
    <OwnerOrderScreen purchase={props.purchase} /> :
    <ParticipantOrderScreen purchase={props.purchase} />;

const mapStateToProps = createStructuredSelector({
  purchase: makeSelectCurrentPurchase(),
});

StoreOrderInfo.propTypes = {
  purchase: PropTypes.object,
};

export default connect(mapStateToProps)(StoreOrderInfo);
