import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PurchaseItem = (props) => (
  <div className={classNames('purchase-item', { 'purchase-item_selected': props.active })}>
    <span className="purchase-item_name">{props.name}</span>
  </div>
);

PurchaseItem.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
};

export default PurchaseItem;
