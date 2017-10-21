import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles';
const headerHeight = 60;

class Header extends Component {
  render() {
    return (
      <div className="android-header mdl-layout__header mdl-layout__header--waterfall" style={{ minHeight: `${headerHeight}px` }}>
        <div className="mdl-layout__header-row" style={{ height: `${headerHeight}px` }}>
          <span className="android-title mdl-layout-title">
            <Link to="/" style={styles.title}> WisePay </Link>
          </span>

          <div className="android-header-spacer mdl-layout-spacer"></div>

          <div className="android-navigation-container">
            <nav className="android-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Contact us</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">About us</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
