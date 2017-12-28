import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';

import MakeOrderComponent from 'containers/Orders/MakeOrderComponent';
import OrderTotalInfo from '../OrderTotalInfo';

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
          <MakeOrderComponent purchase={this.props.purchase} />
        </Tab>
        <Tab label="Total info" value="totalInfo">
          <OrderTotalInfo users={this.props.purchase.users} />
        </Tab>
      </Tabs>
    );
  }

  handleChange = (value) => {
    this.setState({
      value,
    });
  };
}

OrderInProgressScreen.propTypes = {
  purchase: PropTypes.object.isRequired,
};

export default OrderInProgressScreen;
