import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import CustomScroll from 'react-custom-scroll';

import StoreItemsList from '../StoreItemsList';
import './styles.css';

const UserOrderInfo = (props) => {
  const { items, sum, isOrderSubmitted, onChangeOrderClick } = props;

  return (
    <div className="user-order-info">
      <div className="user-order-info__items-list">
        {
          items && (
            <CustomScroll heightRelativeToParent="100%">
              <StoreItemsList items={items} />
            </CustomScroll>
          )
        }
      </div>
      <div className="user-order-info__sum">
        Total sum: {sum} BYN
      </div>
      {
        !isOrderSubmitted && (
          <div className="user-order-info__bottom-line">
            <RaisedButton
              label="Change your order"
              primary
              onClick={onChangeOrderClick}
            />
          </div>
        )
      }
    </div>
  );
};

UserOrderInfo.propTypes = {
  isOrderSubmitted: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  sum: PropTypes.number,

  onChangeOrderClick: PropTypes.func,
};

export default UserOrderInfo;
