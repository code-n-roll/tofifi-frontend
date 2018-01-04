import React from 'react';
import PropTypes from 'prop-types';
import ActionDoneIcon from 'material-ui/svg-icons/action/done';
import QueryBuilderIcon from 'material-ui/svg-icons/action/query-builder';
import ClearIcon from 'material-ui/svg-icons/content/clear';

const iconStyle = {
  display: 'block',
  marginBottom: '-1px',
};

const UserPurchaseStatusIcon = (props) => {
  let icon = null;
  switch (props.status) {
    case 0:
      icon = (<QueryBuilderIcon color="#6490b1" style={iconStyle} />);
      break;
    case 1:
      icon = (<ActionDoneIcon color="#4caf50" style={iconStyle} />);
      break;
    case 2:
      icon = (<ClearIcon color="#F44336" style={iconStyle} />);
      break;
    default:
      break;
  }

  return (
    <span>{icon}</span>
  );
};

UserPurchaseStatusIcon.propTypes = {
  status: PropTypes.number.isRequired,
};

export default UserPurchaseStatusIcon;
