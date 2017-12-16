import React from 'react';
import PropTypes from 'prop-types';
import PurchaseParticipant from '../PurchaseParticipant';

const PurchaseParticipantsList = (props) => (
  <div className="create-purchase-participants-container">
    {props.participants.map((participant) => (
      <PurchaseParticipant {...participant} />
    ))}
  </div>
);

PurchaseParticipantsList.propTypes = {
  participants: PropTypes.array,
};

export default PurchaseParticipantsList;
