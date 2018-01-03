import React from 'react';
import PropTypes from 'prop-types';
import UserPurchaseStatusIcon from 'components/UserPurchaseStatusIcon';
import Avatar from 'components/Avatar';

import { Card, CardText } from 'material-ui/Card';
import './styles.css';

const ParticipantItem = (props) => (
  <Card className="purchase-info_participant-container">
    <div>
      <div className="participant-item__img">
        <Avatar username={props.username} avatarUrl={props.avatarUrl} />
      </div>
      <div className="owner-purchase-info-item">
        {props.username}
      </div>
    </div>
    <CardText>
      <div className="participant-item__text">
        {
          props.sum ? (
            <span>{props.sum.toFixed(2)} BYN</span>
          ) : (
            <span>Own sum</span>
          )
        }
        <div className="participant-item__action">
          <UserPurchaseStatusIcon status={props.status} />
        </div>
      </div>
    </CardText>
  </Card>
);

ParticipantItem.propTypes = {
  sum: PropTypes.number,
  username: PropTypes.string,
  status: PropTypes.number,
  avatarUrl: PropTypes.string,
};

export default ParticipantItem;
