import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background from './Background';
import Header from './Header';
import Content from './Content';
import styles from "../../pages/SignInPage/styles";

class MainLayout extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Background />
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
