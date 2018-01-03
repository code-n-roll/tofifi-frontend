import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import MakeOrderComponent from 'containers/Orders/MakeOrderComponent';
import OrderTotalInfo from '../OrderTotalInfo';

const fullHeightStyle = {
  height: '100%',
};

class OrderInProgressScreen extends Component {
  state = {
    value: 'my-order',
  };

  handleChangeTab = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { purchase, currentUser } = this.props;
    const userOrder = _.find(purchase.users, (u) => u.userId === currentUser.id);
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChangeTab}
        contentContainerStyle={fullHeightStyle}
        tabTemplateStyle={{ height: 'calc(100% - 50px)' }}
        style={fullHeightStyle}
      >
        <Tab label="My order" value="my-order">
          <MakeOrderComponent purchase={purchase} prevOrderItems={userOrder.items} />
        </Tab>
        <Tab label="Total info" value="total-info">
          <OrderTotalInfo users={purchase.users} purchaseId={purchase.id} />
        </Tab>
      </Tabs>
    );
  }
}

OrderInProgressScreen.propTypes = {
  purchase: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

export default connect(mapStateToProps)(OrderInProgressScreen);
