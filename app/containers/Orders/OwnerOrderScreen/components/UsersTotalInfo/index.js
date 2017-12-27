import React from 'react';
import PropTypes from 'prop-types';

import UserOrder from './UserOrder';
import './styles.css';

const UsersTotalInfo = (props) => (
  <div>
    <div className="submitted-order__user-list">
      {
        props.users &&
          props.users.map((user) =>
            <UserOrder key={user.userId} {...user} />
          )
      }
    </div>
    <div>

    </div>
  </div>
);

UsersTotalInfo.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersTotalInfo;
