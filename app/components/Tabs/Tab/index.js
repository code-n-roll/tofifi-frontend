import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  render() {
    return (
      <a className={`mdl-tabs__tab ${this.props.isActive ? 'is-active' : ''}`}
        onClick={(e) => {
            e.preventDefault();
            this.props.onClick();
        }}
      >
        {this.props.name}
      </a>
    );
  }
}

Tab.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string
};

export default Tab;
