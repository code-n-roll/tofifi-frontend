import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class UserOrder extends Component {
  state = {  }
  render() {
    let {username, avatarUrl, items, totalSum, isPayedOff } = this.props;
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
                  items.map(item =>
                    <li key={item.name}>{item.name} {item.sum}</li>
                  )
              }
            </ul>
          </div>
          <div>
            {totalSum} {isPayedOff}
          </div>
        </CardText>
        </Card>
    );
  }
}

UserOrder.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  totalSum: PropTypes.number.isRequired,
  isPayedOff: PropTypes.bool.isRequired
}

export default UserOrder;
