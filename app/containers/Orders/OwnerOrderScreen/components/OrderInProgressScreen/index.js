import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';

import OrderTotalInfo from '../OrderTotalInfo';
import StoreComponent from 'containers/Orders/StoreComponent';

class OrderInProgressScreen extends Component {
  state = {
    value: 'a',
  };

  render() {
    console.log(this.props.purchase)
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="My order" value="myOrder">
          <StoreComponent purchase={this.props.purchase} />
        </Tab>
        <Tab label="Total info" value="totalInfo">
          <OrderTotalInfo users={this.props.purchase.users} />
        </Tab>
      </Tabs>
    );
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
}

OrderInProgressScreen.propTypes = {
  purchase: PropTypes.object.isRequired
}

export default OrderInProgressScreen;
