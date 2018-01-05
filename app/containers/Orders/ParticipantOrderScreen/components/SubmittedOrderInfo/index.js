import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CustomScroll from 'react-custom-scroll';
import { connect } from 'react-redux';

import UserPurchaseStatusIcon from 'components/UserPurchaseStatusIcon';
import { payPurchaseRequest, declinePurchaseRequest } from 'pages/DashboardPage/actions';
import { PURHCASE_STATUSES } from 'pages/DashboardPage/constants';
import StoreItemsList from 'containers/Orders/StoreItemsList';
import './styles.css';

class SubmittedOrderInfo extends Component {
  handlePayClick = () => {
    this.props.payPurchaseRequest({ purchaseId: this.props.purchase.id, data: { sum: this.props.purchase.sum } });
  }

  handleDeclineClick = () => {
    this.props.declinePurchaseRequest({ purchaseId: this.props.purchase.id });
  }

  render() {
    const { purchase } = this.props;

    return (
      <div className="submitted-order-info">
        <div className="submitted-order-info__items-list">
          <CustomScroll heightRelativeToParent="100%">
            <StoreItemsList items={purchase.items} />
          </CustomScroll>
        </div>

        <div className="submitted-order-info__bottom-row">
          <div className="submitted-order-info__bottom-row__sum">
            <div>
              Total sum: {purchase.sum} BYN
            </div>
            <div className="submitted-order-info__bottom-row__status">
              <UserPurchaseStatusIcon status={purchase.status} />
            </div>
          </div>
          {
            purchase.status === PURHCASE_STATUSES.NEW && (
              <div className="submitted-order-info__bottom-row__actions">
                <FlatButton
                  label="Decline"
                  onClick={this.handleDeclineClick}
                />
                <RaisedButton
                  label="Pay"
                  primary
                  onClick={this.handlePayClick}
                />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

SubmittedOrderInfo.propTypes = {
  purchase: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sum: PropTypes.number,
    items: PropTypes.array.isRequired,
  }).isRequired,

  payPurchaseRequest: PropTypes.func,
  declinePurchaseRequest: PropTypes.func,
};

const mapDispatchToProps = {
  payPurchaseRequest,
  declinePurchaseRequest,
};

export default connect(() => ({}), mapDispatchToProps)(SubmittedOrderInfo);
