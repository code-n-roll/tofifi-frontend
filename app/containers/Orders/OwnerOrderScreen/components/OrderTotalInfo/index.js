import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserOrder from './UserOrder';
import './styles.css';

class OrderTotalInfo extends Component {
  render() {
    return (
      <div className="submitted-order__user-list">
        {
          this.props.users &&
            this.props.users.map(user =>
              <UserOrder key={user.id} {...user} />
            )
        }
      </div>
    );
  }
}

OrderTotalInfo.propTypes = {
  users: PropTypes.array.isRequired
}

export default OrderTotalInfo;
