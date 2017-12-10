import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from './BackgroundImage';
import Header from './Header';
import Content from './Content';

const UnloggedLayout = (props) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <BackgroundImage />
    <Header />
    <Content>
      {props.children}
    </Content>
  </div>
);

UnloggedLayout.propTypes = {
  children: PropTypes.any,
};

export default UnloggedLayout;
