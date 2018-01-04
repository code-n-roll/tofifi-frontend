import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import CustomScroll from 'react-custom-scroll';

import { submitStoreOrderRequest } from 'pages/DashboardPage/actions';
import UsersTotalInfo from '../UsersTotalInfo';
import './styles.css';

class OrderTotalInfo extends Component {
  handleSubmitOrder = () => {
    this.props.submitStoreOrderRequest(this.props.purchaseId);
  }

  render() {
    return (
      <div className="order-total-info__wrapper">
        <CustomScroll heightRelativeToParent="calc(100% - 96px)">
          <UsersTotalInfo users={this.props.users} />
        </CustomScroll>

        <div className="order-total-info__bottom-line">
          <RaisedButton
            label="Submit order"
            onClick={this.handleSubmitOrder}
            primary
          />
        </div>
      </div>
    );
  }
}

OrderTotalInfo.propTypes = {
  users: PropTypes.array.isRequired,
  purchaseId: PropTypes.number.isRequired,

  submitStoreOrderRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  submitStoreOrderRequest,
};

export default connect(() => ({}), mapDispatchToProps)(OrderTotalInfo);
