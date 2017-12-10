import React from 'react';
import PropTypes from 'prop-types';
import ParticipantItem from './ParticipantItem';

const OwnerPurchaseInfo = (props) => (
  <div className="owner-purchase-info-container">
    {props.users.map((user) => (
      <ParticipantItem {...user} />
    ))}
  </div>
);

OwnerPurchaseInfo.propTypes = {
  users: PropTypes.array,
};

export default OwnerPurchaseInfo;
