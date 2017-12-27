import React from 'react';
import PropTypes from 'prop-types';
import PurchaseParticipant from '../PurchaseParticipant';

const PurchaseParticipantsList = (props) => (
  <div className="create-purchase-participants-container">
    {props.participants.map((participant) => (
      <PurchaseParticipant
        key={participant.id}
        {...participant}
        onSumChange={(value) => props.onAnyParticipantValueChange(participant.id, value)}
      />
    ))}
  </div>
);

PurchaseParticipantsList.propTypes = {
  participants: PropTypes.array,
  onAnyParticipantValueChange: PropTypes.func,
};

export default PurchaseParticipantsList;
