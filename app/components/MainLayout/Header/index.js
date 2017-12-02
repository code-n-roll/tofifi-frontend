import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles';
const headerHeight = 60;

class Header extends Component {
  render() {
    return (
      <div className="layout-header mdl-layout__header mdl-layout__header--waterfall" style={{ minHeight: `${headerHeight}px` }}>
        <div className="mdl-layout__header-row" style={{ height: `${headerHeight}px` }}>
          <div className="layout-header-spacer mdl-layout-spacer"></div>

          <div className="layout-navigation-container">
            <nav className="layout-navigation mdl-navigation">
              <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/">Contact us</Link>
              <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/">About us</Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
