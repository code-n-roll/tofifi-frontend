import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UsersTotalInfo from '../UsersTotalInfo';

class SubmittedOrderInfo extends Component {
  render() {
    return (
      <div>
        <UsersTotalInfo users={this.props.users} />
      </div>
    );
  }
}

SubmittedOrderInfo.propTypes = {
  users: PropTypes.array.isRequired,
};

export default SubmittedOrderInfo;
