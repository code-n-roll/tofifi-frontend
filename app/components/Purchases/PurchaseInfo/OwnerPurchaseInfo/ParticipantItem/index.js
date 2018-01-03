import PropTypes from 'prop-types';
import FaCheck from 'react-icons/lib/fa/check';
import FaTimes from 'react-icons/lib/fa/close';
import ActionDoneIcon from 'material-ui/svg-icons/action/done';
import QueryBuilderIcon from 'material-ui/svg-icons/action/query-builder';

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Avatar from 'react-avatar';
import './styles.css';

const avatarStyle = {
  display: 'block',
  marginBottom: '5px',
};

const iconStyle = {
  display: 'block',
  marginBottom: '-1px'
};

const ParticipantItem = (props) => (
  <Card className="purchase-info_participant-container">
    <div>
      <div className="participant-item__img">
        {props.avatarUrl ?
          <img width={50} height={50} src={props.avatarUrl} alt={props.username} /> :
          <Avatar name={props.username} size={50} round style={avatarStyle} />
        }
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
          { props.isPayedOff ?
            <ActionDoneIcon color='#4caf50' style={iconStyle}/> :
            <QueryBuilderIcon color='#6490b1' style={iconStyle}/> }
        </div>
      </div>
    </CardText>
  </Card>
);

ParticipantItem.propTypes = {
  sum: PropTypes.number,
  username: PropTypes.string,
  isPayedOff: PropTypes.bool,
  avatarUrl: PropTypes.string,
};

export default ParticipantItem;
