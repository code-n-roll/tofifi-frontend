import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const UserOrder = (props) => {
  const { items, user } = props;
  return (
    <Card>
      <CardHeader
        title={user.username}
        avatar={user.avatarUrl}
      />
      <CardText>
        <div>
          <ul>
            {
              items &&
              items.map((item) =>
                <li key={item.itemId}>{item.info.name} {item.info.price}</li>
              )
            }
          </ul>
        </div>
        <div>
          {user.sum} {user.status}
        </div>
      </CardText>
    </Card>
  );
};

UserOrder.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    sum: PropTypes.number,
    status: PropTypes.number.isRequired,
  }),
  items: PropTypes.array.isRequired,
};

export default UserOrder;
