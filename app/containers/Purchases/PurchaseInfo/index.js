import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentPurchase } from 'pages/DashboardPage/selectors';
import { payPurchaseRequest, declinePurchaseRequest } from 'pages/DashboardPage/actions';

import PropTypes from 'prop-types';
import OwnerPurchaseInfo from 'components/Purchases/PurchaseInfo/OwnerPurchaseInfo';
import NotOwnerPurchaseInfo from 'components/Purchases/PurchaseInfo/NotOwnerPurchaseInfo';

class PurchaseInfo extends Component {
  constructor(props) {
    super(props);

    this.handlePayClick = this.handlePayClick.bind(this);
    this.handleDeclineClick = this.handleDeclineClick.bind(this);
  }

  handlePayClick() {
    this.props.payPurchaseRequest({ purchaseId: this.props.purchase.id, data: { sum: this.props.purchase.sum } });
  }

  handleDeclineClick() {
    this.props.payPurchaseRequest({ purchaseId: this.props.purchase.id });
  }

  render() {
    const { props } = this;

    return (
      (
        props.purchase &&
        (
          props.purchase.isOwner ? (
            <OwnerPurchaseInfo {...props.purchase} />
          ) :
          (
            <NotOwnerPurchaseInfo
              {...props.purchase}
              onPayClick={this.handlePayClick}
              onDeclineClick={this.handleDeclineClick}
            />
        )
      )
      ) || null
    );
  }
}

PurchaseInfo.propTypes = {
  purchase: PropTypes.object,
  payPurchaseRequest: PropTypes.func,
  declinePurchaseRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  purchase: makeSelectCurrentPurchase(),
});

const mapDispatchToProps = {
  payPurchaseRequest,
  declinePurchaseRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseInfo);
