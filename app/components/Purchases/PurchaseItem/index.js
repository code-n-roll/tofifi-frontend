import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { ListItem } from 'material-ui/List';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ActionDoneAllIcon from 'material-ui/svg-icons/action/done-all';
import ActionShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import { red500, green500, gray400, white, red200 } from 'material-ui/styles/colors';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import Avatar from 'material-ui/Avatar';
import { PURHCASE_STATUSES } from 'pages/DashboardPage/constants';

const zeroPrice = "0.00";

const PurchaseItem = (props) => (

  <ListItem
    leftAvatar={
      <Avatar
        icon={<ActionShoppingCartIcon />}
        color="#fff"
        backgroundColor={gray400}
        size={40}
      />
    }
    hoverColor="#eff4f9"
    primaryText={props.name}
    rightIcon={props.isPayedOff || (props.status && props.status == PURHCASE_STATUSES.PAYED) ?
      <ActionDoneAllIcon color={ props.isActive ? white : '#6490b1' } /> :
      (props.status && props.status == PURHCASE_STATUSES.DECLINED) ?
        <ClearIcon size={5} color={ props.isActive ? white : red200 } />:
        <div style={{padding: 4}}>
          <div style={{
            background: props.isActive ? white : '#6490b1',
            borderRadius: 10,
            width: 12,
            height: 12
          }} />
        </div>
    }
    secondaryText={
      <div>
        <div style={{ textAlign: 'right' }}>
          {props.isOwner && !props.isPending && (
            <span style={{
              color: props.isActive ? white : green500,
              verticalAlign: 'bottom'
            }}>
              <ExpandLessIcon color={ props.isActive ? white : green500 } />
              {props.totalSum ? props.totalSum.toFixed(2) : zeroPrice}
            </span>
          )}
          {!props.isOwner && !props.isPending && (
            <span style={{
              color: props.isActive ? white : red500,
              textAlign: 'right'
            }}>
              <ExpandMoreIcon color={ props.isActive ? white : red500 } />
              <span style={{ lineHeight: '24px' }}>
                {props.sum ? props.sum.toFixed(2) : zeroPrice}
              </span>
            </span>
          )}
          {props.isPending && (
            <span style={{
              color: props.isActive ? white : gray400,
              verticalAlign: 'bottom'
            }}>
              Pending...
            </span>
          )}
        </div>
      </div>
    }
    secondaryTextLines={2}
    onClick={() => browserHistory.push(`?purchase=${props.id}`)}
    style={
      props.isActive ?
        {
          backgroundColor: '#6490b1',
          color: '#fff'
        } : null
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
  status: PropTypes.number,
};

export default PurchaseItem;
