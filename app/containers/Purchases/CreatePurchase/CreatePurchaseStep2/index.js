import React from 'react';
import PropTypes from 'prop-types';
import PurchaseForm from 'components/forms/PurchaseForm';

const CreatePurchaseStep2 = (props) => (
  <PurchaseForm
    participants={props.participants}
  />
);

CreatePurchaseStep2.propTypes = {
  participants: PropTypes.array,
};

export default CreatePurchaseStep2;
