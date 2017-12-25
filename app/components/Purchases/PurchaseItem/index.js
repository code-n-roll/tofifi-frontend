import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { ListItem } from 'material-ui/List';
import ActionInfoIcon from 'material-ui/svg-icons/action/info';
import ActionDoneIcon from 'material-ui/svg-icons/action/done';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ShoppingBacketIcon from 'material-ui/svg-icons/action/shopping-basket';
import { red500, green500, gray400 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

const PurchaseItem = (props) => (
  <ListItem
    leftAvatar={
      <Avatar
        icon={<ShoppingBacketIcon />}
        color="#fff"
        backgroundColor={gray400}
        size={40}
      />
    }
    primaryText={props.name}
    rightIcon={props.isPayedOff ? <ActionDoneIcon /> : <ActionInfoIcon />}
    secondaryText={
      <p>
        {props.isOwner && !props.isPending && (
          <span style={{ color: green500, verticalAlign: 'bottom' }}>
            <ExpandLessIcon color={green500} />
            {props.totalSum}$
          </span>
        )}
        {!props.isOwner && !props.isPending && (
          <span style={{ color: red500 }}>
            <ExpandMoreIcon color={red500} />
            <span style={{ lineHeight: '24px' }}>
              {props.sum}$
            </span>
          </span>
        )}
        {props.isPending && (
          <span style={{ color: gray400, verticalAlign: 'bottom' }}>
            Pending...
          </span>
        )}
      </p>
    }
    secondaryTextLines={2}
    onClick={() => browserHistory.push(`?purchase=${props.id}`)}
    style={
      props.isActive ?
        { backgroundColor: '#dadada' } : null
    }
  />
);

PurchaseItem.propTypes = {
  name: PropTypes.string,
  isActive: PropTypes.bool,
  sum: PropTypes.number,
  isOwner: PropTypes.bool,
  isPending: PropTypes.bool,
  totalSum: PropTypes.number,
  id: PropTypes.number,
  isPayedOff: PropTypes.bool,
};

export default PurchaseItem;
