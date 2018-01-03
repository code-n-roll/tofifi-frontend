import React from 'react';
import PropTypes from 'prop-types';
import CustomScroll from 'react-custom-scroll';

import UsersTotalInfo from '../UsersTotalInfo';


const SubmittedOrderInfo = (props) => (
  <CustomScroll heightRelativeToParent="100%">
    <UsersTotalInfo users={props.users} />
  </CustomScroll>
);

SubmittedOrderInfo.propTypes = {
  users: PropTypes.array.isRequired,
};

export default SubmittedOrderInfo;
