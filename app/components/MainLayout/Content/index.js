import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  render() {
    return (
      <div className="layout-content mdl-layout__content">
        {this.props.children}
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.any,
};

export default Content;
