import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CustomScroll from 'react-custom-scroll';

import StoreItemsList from 'containers/Orders/StoreItemsList';
import './styles.css';

class SubmittedOrderInfo extends Component {
  render() {
    const { purchase } = this.props;

    return (
      <div className="submitted-order-info">
        <div className="submitted-order-info__items-list">
          <CustomScroll heightRelativeToParent="100%">
            <StoreItemsList items={purchase.items} />
          </CustomScroll>
        </div>

        <div className="submitted-order-info__bottom-row">
          <div className="submitted-order-info__bottom-row__sum">
            Total sum: {purchase.sum} BYN
          </div>
          <div className="submitted-order-info__bottom-row__actions">
            <FlatButton label="Decline" />
            <RaisedButton label="Pay" primary />
          </div>
        </div>
      </div>
    );
  }
}

SubmittedOrderInfo.propTypes = {
  purchase: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default SubmittedOrderInfo;
