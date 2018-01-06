import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomScroll from 'react-custom-scroll';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

import UserOrderInfo from 'containers/Orders/UserOrderInfo';
import { selectOrderJustSubmittedState } from 'pages/DashboardPage/selectors';
import { setOrderJustSubmittedState } from 'pages/DashboardPage/actions';
import UsersTotalInfo from '../UsersTotalInfo';
import './styles.css';


class SubmittedOrderInfo extends Component {
  onOkClick = () => {
    this.props.setOrderJustSubmittedState(false);
  }

  render() {
    const allItems = _
      .chain(this.props.users)
      .flatMap((user) => user.items)
      .groupBy((item) => item.itemId)
      .mapValues((itemGroup) =>
        itemGroup.reduce((prevValue, item) => {
          const nextValue = { ...prevValue };
          nextValue.number += item.number;
          nextValue.price += item.price;
          nextValue.itemId = item.itemId;

          return nextValue;
        }, {
          number: 0,
          price: 0,
        })
      )
    .values()
    .value();
    const itemsSum = _.sumBy(allItems, (item) => item.price);

    return (
      this.props.isOrderJustSubmitted ? (
        <div className="submitted-preview">
          <UserOrderInfo
            isOrderSubmitted
            items={allItems}
            sum={itemsSum}
          />
          <div className="submitted-preview__bottom-line">
            <RaisedButton
              label="OK"
              primary
              onClick={this.onOkClick}
            />
          </div>
        </div>
      ) : (
        <CustomScroll heightRelativeToParent="100%">
          <UsersTotalInfo users={this.props.users} />
        </CustomScroll>
      )
    );
  }
}

SubmittedOrderInfo.propTypes = {
  users: PropTypes.array.isRequired,

  isOrderJustSubmitted: PropTypes.bool,
  setOrderJustSubmittedState: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOrderJustSubmitted: selectOrderJustSubmittedState,
});

const mapDispatchToProps = {
  setOrderJustSubmittedState,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmittedOrderInfo);
