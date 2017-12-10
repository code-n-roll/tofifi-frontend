import React from 'react';
import PropTypes from 'prop-types';
import FaCheck from 'react-icons/lib/fa/check';
import FaTimes from 'react-icons/lib/fa/close';
import classNames from 'classnames';

const ParticipantItem = (props) => (
  <div className="purchase-info_participant-container">
    <div className="purchase-info_participant">
      <div className="purchase-info_participant__sum">
        {props.sum} $
      </div>
      <div className="purchase-info_participant__username">
        {props.username}
      </div>
    </div>
    <div
      className={classNames('purchase-info_participant__status',
      { 'purchase-info_participant__status-paid': props.isPayedOff })}
    >
      { props.isPayedOff ? <FaCheck/> : <FaTimes/> }
    </div>
  </div>
);

ParticipantItem.propTypes = {
  sum: PropTypes.number,
  username: PropTypes.string,
  isPayedOff: PropTypes.bool,
};

export default ParticipantItem;
