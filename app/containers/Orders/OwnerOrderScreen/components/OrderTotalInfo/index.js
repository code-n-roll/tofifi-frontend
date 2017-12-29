import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import { submitStoreOrderRequest } from 'pages/DashboardPage/actions';
import UsersTotalInfo from '../UsersTotalInfo';

class OrderTotalInfo extends Component {
  handleSubmitOrder = () => {
    this.props.submitStoreOrderRequest(this.props.purchaseId);
  }

  render() {
    return (
      <div>
        <UsersTotalInfo users={this.props.users} />
        <div>
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
