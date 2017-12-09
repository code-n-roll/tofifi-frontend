import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => (
  <div className="layout-content mdl-layout__content">
    {props.children}
  </div>
);

Content.propTypes = {
  children: PropTypes.any,
};

export default Content;
