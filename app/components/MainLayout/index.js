import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

class MainLayout extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <Content>
          {this.props.children}
        </Content>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
