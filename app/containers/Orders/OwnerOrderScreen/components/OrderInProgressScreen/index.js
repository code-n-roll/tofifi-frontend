import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Tabs from 'components/Tabs';
import Tab from 'components/Tabs/Tab';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import MakeOrderComponent from 'containers/Orders/MakeOrderComponent';
import OrderTotalInfo from '../OrderTotalInfo';

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
      <Tabs fullHeight>
        <Tab name="My order">
          <MakeOrderComponent purchase={purchase} prevOrderItems={userOrder.items} />
        </Tab>
        <Tab name="Total info">
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
