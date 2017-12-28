import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import './styles.css';

const StoreItemsList = (props) => (
  <div>
    <div>
      { props.items ?
        props.items.map((item) =>
          <Paper zDepth={1} className="user-order-info__item">
            <img src={item.imageUrl} alt={item.name} />
            <div>{item.name}</div>
            <div>
              <div>{item.amount}</div>
              <div>{item.price}</div>
            </div>
          </Paper>
        ) : (
          <div>No ordered items</div>
        )
      }
    </div>
  </div>
);

StoreItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default StoreItemsList;
