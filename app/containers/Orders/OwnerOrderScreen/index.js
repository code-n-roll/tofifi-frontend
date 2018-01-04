import React from 'react';
import PropTypes from 'prop-types';

import OrderInProgressScreen from './components/OrderInProgressScreen';
import SubmittedOrderInfo from './components/SubmittedOrderInfo';

const OwnerOrderScreen = (props) => {
  const { purchase } = props;
  return (
    purchase.storeOrder.isSubmitted
      ? <SubmittedOrderInfo users={purchase.users} />
      : <OrderInProgressScreen purchase={purchase} />
  );
};

OwnerOrderScreen.propTypes = {
  purchase: PropTypes.object.isRequired,
};

export default OwnerOrderScreen;
