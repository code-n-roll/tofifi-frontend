import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

const LoggedLayout = (props) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header
      onLogOut={props.onLogOut}
      onGroupLinkClick={props.onGroupLinkClick}
      onSettingsClick={props.onSettingsClick}
    />
    <Content>
      {props.children}
    </Content>
  </div>
);

LoggedLayout.propTypes = {
  children: PropTypes.any,
  onLogOut: PropTypes.func,
  onGroupLinkClick: PropTypes.func,
  onSettingsClick: PropTypes.func,
};

export default LoggedLayout;
