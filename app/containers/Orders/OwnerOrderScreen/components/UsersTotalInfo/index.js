import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectStoreItems } from 'pages/DashboardPage/selectors';
import { makeSelectCurrentUser } from 'containers/App/selectors';
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

  getUsersWithFirstMe(users) {
    const currentUserId = this.props.currentUser.id;

    return [
      ...users.filter((u) => u.userId === currentUserId),
      ...users.filter((u) => u.userId !== currentUserId),
    ];
  }

  render() {
    const { users, storeItems, currentUser } = this.props;

    return (
      <div className="submitted-order__user-list">
        {
          users && storeItems &&
          this.getUsersWithFirstMe(users).map((user) =>
            <UserOrder
              key={user.userId}
              user={user}
              items={this.getItemsWithInfo(user.items)}
              isCurrentUser={user.userId === currentUser.id}
            />
          )
        }
      </div>
    );
  }
}

UsersTotalInfo.propTypes = {
  users: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,

  storeItems: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  storeItems: selectStoreItems,
  currentUser: makeSelectCurrentUser(),
});


export default connect(mapStateToProps)(UsersTotalInfo);
