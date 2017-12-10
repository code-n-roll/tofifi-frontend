import React from 'react';
import PropTypes from 'prop-types';

const OnScreenHeightSection = (props) => (
  <div style={{ height: 'calc(100vh - 60px)', overflow: 'hidden' }}>
    {props.children}
  </div>
);

OnScreenHeightSection.propTypes = {
  children: PropTypes.any,
};

export default OnScreenHeightSection;
