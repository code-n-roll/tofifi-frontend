import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectStoreItems } from 'pages/DashboardPage/selectors';
import UserOrder from './UserOrder';
import './styles.css';

class UsersTotalInfo extends Component {
  constructor(...args) {
    super(...args);
    this.getItemsWithInfo = this.getItemsWithInfo.bind(this);
  }

  getItemsWithInfo = (items) => items.map((item) => {
    const itemInfo = this.props.storeItems[item.itemId];
    if (!itemInfo) {
      return {
        ...item,
        info: {},
      };
    }

    return {
      ...item,
      info: itemInfo,
    };
  })

  render() {
    return (
      <div>
        <div className="submitted-order__user-list">
          {
            this.props.users &&
            this.props.storeItems &&
            this.props.users.map((user) =>
              <UserOrder
                key={user.userId}
                user={user}
                items={this.getItemsWithInfo(user.items)}
              />
            )
          }
        </div>
      </div>
    );
  }
}

UsersTotalInfo.propTypes = {
  users: PropTypes.array.isRequired,

  storeItems: PropTypes.object,
};

const mapStateToProps = (state) => ({
  storeItems: selectStoreItems(state),
});


export default connect(mapStateToProps)(UsersTotalInfo);
