import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class UserOrder extends Component {
  state = { }
  render() {
    const { username, avatarUrl, items, sum, status } = this.props;
    return (
      <Card>
        <CardHeader
          title={username}
          avatar={avatarUrl}
        />
        <CardText>
          <div>
            <ul>
              {
                items &&
                  items.map((item) =>
                    <li key={item.itemId}>{item.name} {item.price}</li>
                  )
              }
            </ul>
          </div>
          <div>
            {sum} {status}
          </div>
        </CardText>
      </Card>
    );
  }
}

UserOrder.propTypes = {
  username: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  sum: PropTypes.number,
  status: PropTypes.number.isRequired,
};

export default UserOrder;
