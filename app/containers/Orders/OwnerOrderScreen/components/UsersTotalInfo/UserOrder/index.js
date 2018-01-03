import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import CustomScroll from 'react-custom-scroll';

import UserPurchaseStatusIcon from 'components/UserPurchaseStatusIcon';
import Avatar from 'components/Avatar';
import './styles.css';

const UserOrder = (props) => (
  <Paper className="user-order">
    <div className="user-order__user-info">
      <Avatar username={props.user.username} avatarUrl={props.user.avatarUrl} />
      <div className="user-order__user-info__name">{props.user.username}</div>
    </div>
    {
      props.items && props.items.length > 0 ? (
        <div>
          <CustomScroll heightRelativeToParent="100px">
              {
                props.items.map((item) =>
                  <div key={item.itemId} className="user-order__item">
                    <div className="user-order__item-name">
                      {item.info.name}
                      {
                        item.number > 1 &&
                          <span className="user-order__item-amount">x{item.number}</span>
                      }
                    </div>
                    <div className="user-order__item-price">
                      {item.price} {item.info.currency}
                    </div>
                  </div>
                )
              }
          </CustomScroll>
          <div className="user-order__status-line">
            <div className="user-order__total-sum">
              {
                props.user.sum ? (
                  <span>{props.user.sum.toFixed(2)} BYN</span>
                ) : (
                  <span>Own sum</span>
                )
              }
              <div className="user-order__status">
                <UserPurchaseStatusIcon status={props.user.status} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="user-order__no-order">No order</div>
      )
    }
  </Paper>
);

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
