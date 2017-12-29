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
      <div style={{ float: 'left', margin: 15 }}>
        {props.avatarUrl ?
          <img width={50} height={50} src={props.avatarUrl} /> :
          <Avatar name={props.username} size={50} round style={avatarStyle} />
        }
      </div>
      <div style={{ lineHeight: 4.2, marginLeft: 70, fontSize: 18, textAlign: 'left' }}>
        {props.username}
      </div>
    </div>
    <CardText style={{ padding: '20px 0 33px 25px', fontSize: 27, textAlign: 'center' }}>
      {props.sum.toFixed(2)} BYN
      <div style={{ display: 'inline-block', marginLeft: 25 }}>
        { props.isPayedOff ?
          <ActionDoneIcon color='#4caf50' style={iconStyle}/> :
          <QueryBuilderIcon color='#6490b1' style={iconStyle}/> }
      </div>
    </CardText>
  </Card>
);

ParticipantItem.propTypes = {
  sum: PropTypes.number,
  username: PropTypes.string,
  isPayedOff: PropTypes.bool,
};

export default ParticipantItem;
