import React from 'react';
import PropTypes from 'prop-types';
import GroupItem from '../GroupItem';

const GroupsList = (props) => (
  <div>
    {props.groups.map((group) => (
      <GroupItem
        {...group}
        onClick={props.onGroupItemClick}
        selected={props.selectedGroup === group.id}
        key={group.id}
        withMenu={props.withMenu}
        avatarsNumber={props.avatarsNumber}
        onEditClick={() => props.onEditClick(group)}
        onDeleteClick={() => props.onDeleteClick(group)}
        onLeaveClick={() => props.onLeaveClick(group)}
      />
    ))}
  </div>
);

GroupsList.propTypes = {
  groups: PropTypes.array,
  selectedGroup: PropTypes.number,
  withMenu: PropTypes.bool,
  onEditClick: PropTypes.func,
  avatarsNumber: PropTypes.number,
};

export default GroupsList;
