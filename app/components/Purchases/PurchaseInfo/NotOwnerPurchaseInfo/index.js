import React from 'react';
import PropTypes from 'prop-types';
import creditCardImage from './credit-card.png';
import FlatButton from 'material-ui/FlatButton';

const NotOwnerPurchaseInfo = (props) => (
  <div className="purchase-info-container">
    <div className="purchase-info-centered">
      <div className="purchase-info_credit-card-container">
        <img src={creditCardImage} role="presentation" style={{ maxWidth: '100%' }} />
        { /* <span className="purchase-info_credit-card__owner">Anton Dacik</span> */ }
      </div>
      <div className="purchase-info_amount">
        Amount: {props.sum} $
      </div>
    </div>
    <div className="purchase-info_buttons">
      <FlatButton
        label="Decline"
        secondary={true}
        style={{ marginRight: 20 }}
        onClick={props.onDeclineClick}/>

      <FlatButton
        label="Pay"
        primary={true}
        onClick={props.onPayClick}/>
    </div>
  </div>
);

NotOwnerPurchaseInfo.propTypes = {
  sum: PropTypes.number,
  onPayClick: PropTypes.func,
  onDeclineClick: PropTypes.func,
};

export default NotOwnerPurchaseInfo;
