import React from 'react';
import PropTypes from 'prop-types';
import GroupItem from '../GroupItem';

const GroupsList = (props) => (
  <div>
    {props.groups.map((group) => (
      <GroupItem {...group} onClick={props.onGroupItemClick} selected={props.selectedGroup === group.id} />
    ))}
  </div>
);

GroupsList.propTypes = {
  groups: PropTypes.array,
  selectedGroup: PropTypes.number,
};

export default GroupsList;
