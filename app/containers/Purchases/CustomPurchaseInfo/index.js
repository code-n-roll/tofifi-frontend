import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OwnerPurchaseInfo from 'components/Purchases/PurchaseInfo/OwnerPurchaseInfo';
import NotOwnerPurchaseInfo from 'components/Purchases/PurchaseInfo/NotOwnerPurchaseInfo';
import { payPurchaseRequest, declinePurchaseRequest } from 'pages/DashboardPage/actions';

class CustomPurchaseInfo extends Component {
  constructor(props) {
    super(props);

    this.handlePayClick = this.handlePayClick.bind(this);
    this.handleDeclineClick = this.handleDeclineClick.bind(this);
  }

  handlePayClick(sum) {
    this.props.payPurchaseRequest({ purchaseId: this.props.purchase.id, data: { sum: this.props.purchase.sum || sum } });
  }

  handleDeclineClick() {
    this.props.declinePurchaseRequest({ purchaseId: this.props.purchase.id });
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

CustomPurchaseInfo.propTypes = {
  purchase: PropTypes.object,
  payPurchaseRequest: PropTypes.func,
  declinePurchaseRequest: PropTypes.func,
};


const mapDispatchToProps = {
  payPurchaseRequest,
  declinePurchaseRequest,
};

export default connect(() => ({}), mapDispatchToProps)(CustomPurchaseInfo);
