import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from 'react-dd-menu';
import FaBar from 'react-icons/lib/fa/bars';
import FaCog from 'react-icons/lib/fa/cog';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import { Link } from 'react-router';
import Logo from 'components/Logo';

const headerHeight = 60;
const headerStyle = {
  minHeight: `${headerHeight}px`,
  borderBottom: '2px solid #6ab344',
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderToggler = this.renderToggler.bind(this);

    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  renderToggler() {
    return (
      <button className="button-as-block" onClick={this.toggleMenu}>
        <FaBar style={{ color: '#000 ' }} />
      </button>
    );
  }


  render() {
    const { onLogOut } = this.props;

    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: () => this.toggleMenu(),
      toggle: this.renderToggler(),
      align: 'right',
    };

    return (
      <div className="layout-header mdl-layout__header mdl-layout__header--waterfall" style={headerStyle}>
        <div className="mdl-layout__header-row" style={{ height: `${headerHeight}px` }}>
          <div className="layout-header-spacer mdl-layout-spacer">
            <Link to='/'>
              <Logo />
            </Link>
          </div>

          <div className="layout-navigation-container">
            <nav className="layout-navigation mdl-navigation">
              <DropdownMenu {...menuOptions}>
                <li>
                  <button className="button-as-block">
                    <span style={{ paddingRight: 10 }}>Settings</span>
                    <FaCog />
                  </button>
                </li>
                <li>
                  <button className="button-as-block" onClick={() => { this.toggleMenu(); onLogOut(); }}>
                    <span style={{ paddingRight: 10 }}>Log out</span>
                    <FaSignOut />
                  </button>
                </li>
              </DropdownMenu>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onLogOut: PropTypes.func,
};

export default Header;
