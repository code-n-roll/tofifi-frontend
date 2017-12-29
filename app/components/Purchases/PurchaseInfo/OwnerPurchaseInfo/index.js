import React from 'react';
import PropTypes from 'prop-types';
import ParticipantItem from './ParticipantItem';
import CustomScroll from 'react-custom-scroll';

const OwnerPurchaseInfo = (props) => (
  <CustomScroll heightRelativeToParent="calc(100% - 60px)">
    <div className="owner-purchase-info-container">
      {props.users.map((user) => (
        <ParticipantItem {...user} key={user.userId} />
      ))}
    </div>
  </CustomScroll>
);

OwnerPurchaseInfo.propTypes = {
  users: PropTypes.array,
};

export default OwnerPurchaseInfo;
