import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import StoreItemsList from '../StoreItemsList';
import './styles.css';

class UserOrderInfo extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        <div>
          {
            items && (
              <StoreItemsList items={items} />
            )
          }
        </div>
        <div>
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
