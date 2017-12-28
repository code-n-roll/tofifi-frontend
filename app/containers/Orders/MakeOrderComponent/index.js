import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { updateStoreOrderRequest } from 'pages/DashboardPage/actions';
import UserOrderInfo from '../UserOrderInfo';
import StoreComponent from '../StoreComponent';

class MakeOrderComponent extends Component {
  handleChangeOrderClick = () => {

  }

  handleSubmitOrder = () => {
    this.props.updateStoreOrderRequest(this.props.purchase.id, this.state.selectedItems);
  }

  render() {
    const { prevOrderItems, isOrderSubmitted } = this.props;

    return (
      prevOrderItems ? (
        <UserOrderInfo
          items={prevOrderItems}
          isOrderSubmitted={isOrderSubmitted}
          onChangeOrderClick={this.handleChangeOrderClick}
        />
      ) : (
        <StoreComponent
          purchase={this.props.purchase}
          onSubmitOrder={this.handleSubmitOrder}
        />
      )
    );
  }
}

MakeOrderComponent.propTypes = {
  prevOrderItems: PropTypes.array.isRequired,
  isOrderSubmitted: PropTypes.bool.isRequired,
  purchase: PropTypes.object.isRequired,
  updateStoreOrderRequest,
};

const mapDispatchToProps = {
  updateStoreOrderRequest,
};

export default connect(() => {}, mapDispatchToProps)(MakeOrderComponent);
