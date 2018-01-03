import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectStoreItems } from 'pages/DashboardPage/selectors';
import UserOrder from './UserOrder';
import './styles.css';

class UsersTotalInfo extends Component {
  getItemsWithInfo = (items) => items.map((item) => {
    const itemInfo = this.state.storeItems[item.id];
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
            this.props.users.map((user) =>
              <UserOrder
                key={user.userId}
                user={user}
                items={user.items}
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
};

const mapStateToProps = (state) => ({
  storeItems: selectStoreItems(state),
});


export default connect(mapStateToProps)(UsersTotalInfo);
