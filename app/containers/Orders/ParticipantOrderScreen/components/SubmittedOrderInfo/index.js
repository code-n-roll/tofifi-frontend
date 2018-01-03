import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import StoreItemsList from 'containers/Orders/StoreItemsList';

class SubmittedOrderInfo extends Component {
  state = {}
  render() {
    return (
      <div>
        <StoreItemsList items={this.props.purchase.items} />
        <div>
          <FlatButton label="Decline" />
          <RaisedButton label="Pay" primary />
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
