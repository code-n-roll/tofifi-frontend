import React from 'react';
import PropTypes from 'prop-types';
import CustomScroll from 'react-custom-scroll';
import PurchaseParticipant from '../PurchaseParticipant';

const PurchaseParticipantsList = (props) => (
  <CustomScroll heightRelativeToParent="calc(100% - (48px + 160px))">
    <div className="create-purchase-participants-container">
      {props.participants.map((participant) => (
        <PurchaseParticipant
          key={participant.id}
          {...participant}
          onSumChange={(value) => props.onAnyParticipantValueChange(participant.id, value)}
        />
      ))}
    </div>
  </CustomScroll>
);

PurchaseParticipantsList.propTypes = {
  participants: PropTypes.array,
  onAnyParticipantValueChange: PropTypes.func,
};

export default PurchaseParticipantsList;
