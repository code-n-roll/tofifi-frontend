import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import CustomScroll from 'react-custom-scroll';

import StoreItemsList from '../StoreItemsList';
import './styles.css';

class UserOrderInfo extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="user-order-info">
        <div className="user-order-info__items-list">
          {
            items && (
              <CustomScroll heightRelativeToParent="100%">
                <StoreItemsList items={items} />
              </CustomScroll>
            )
          }
        </div>
        <div className="user-order-info__bottom-line">
          {
            !this.props.isOrderSubmitted && (
              <RaisedButton
                label="Change your order"
                primary
                onClick={this.props.onChangeOrderClick}
              />
            )
          }
        </div>
      </div>
    );
  }
}

UserOrderInfo.propTypes = {
  isOrderSubmitted: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,

  onChangeOrderClick: PropTypes.func.isRequired,
};

export default UserOrderInfo;
