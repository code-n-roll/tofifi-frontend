import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GraySection extends Component {
  render() {
    return (
      <div className="android-gray-section mdl-typography--text-center">
        {this.props.children}
      </div>
    );
  }
}

GraySection.propTypes = {
  children: PropTypes.any,
};

export default GraySection;
