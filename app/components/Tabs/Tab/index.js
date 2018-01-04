import React from 'react';
import PropTypes from 'prop-types';

const tabStyle = {
  cursor: 'pointer',
};

const Tab = (props) => (
  <a
    style={tabStyle}
    className={`mdl-tabs__tab ${props.isActive ? 'is-active' : ''}`}
    onClick={(e) => {
      e.preventDefault();
      props.onClick();
    }}
  >
    {props.name}
  </a>
);

Tab.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default Tab;
