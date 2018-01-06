import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List as ImmutableList } from 'immutable';
import _ from 'lodash';

import { updateStoreOrderRequest } from 'pages/DashboardPage/actions';
import { selectChoosedItems } from 'pages/DashboardPage/selectors';
import UserOrderInfo from '../UserOrderInfo';
import StoreComponent from '../StoreComponent';

class MakeOrderComponent extends Component {
  state = {
    changeOrderMode: false,
  }

  handleChangeOrderClick = () => {
    this.setState({
      changeOrderMode: true,
    });
  }

  handleSubmitOrder = () => {
    const { purchase, choosedItems } = this.props;
    this.props.updateStoreOrderRequest(purchase.id, choosedItems.toJS());
    this.setState({
      changeOrderMode: false,
    });
  }

  handleCancelOrder = () => {
    this.setState({
      changeOrderMode: false,
    });
  }

  render() {
    const { prevOrderItems, purchase } = this.props;

    return (
      (prevOrderItems.length > 0 && !this.state.changeOrderMode) ? (
        <UserOrderInfo
          items={prevOrderItems}
          isOrderSubmitted={purchase.storeOrder.isSubmitted}
          onChangeOrderClick={this.handleChangeOrderClick}
          sum={_.sumBy(prevOrderItems, ((item) => item.price))}
        />
      ) : (
        <StoreComponent
          purchase={this.props.purchase}
          onSubmitOrder={this.handleSubmitOrder}
          onCancelOrder={this.handleCancelOrder}
        />
      )
    );
  }
}

MakeOrderComponent.propTypes = {
  prevOrderItems: PropTypes.array.isRequired,
  purchase: PropTypes.object.isRequired,

  updateStoreOrderRequest: PropTypes.func.isRequired,
  choosedItems: PropTypes.instanceOf(ImmutableList).isRequired,
};

const mapStateToProps = (state) => ({
  choosedItems: selectChoosedItems(state),
});

const mapDispatchToProps = {
  updateStoreOrderRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeOrderComponent);
