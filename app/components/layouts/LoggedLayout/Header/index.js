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
  borderBottom: '2px solid #437ca7',
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
        <FaBar size={16} style={{ color: '#fff ' }} />
      </button>
    );
  }

  render() {
    const { onLogOut, onSettingsClick } = this.props;

    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: () => this.toggleMenu(),
      toggle: this.renderToggler(),
      align: 'right',
    };

    return (
      <div className="layout-header mdl-layout__header mdl-layout__header--waterfall" style={headerStyle}>
        <div className="mdl-layout__header-row" style={{
          height: `${headerHeight}px`,
          backgroundColor: '#5682a3',
          justifyContent: 'center',
          padding: 0
        }}>
          <div className="mdl-layout__header-row" style={{ width: 1000, padding: 0 }}>
            <div className="layout-header-spacer mdl-layout-spacer" style={{ marginLeft: 10 }}>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Logo />
              </Link>
            </div>

            <div className="layout-navigation-container">
              <nav className="layout-navigation mdl-navigation">
                <button
                  className="button-as-block"
                  style={{ fontWeight: 700, color: '#fff', marginRight: 20, fontSize: 16 }}
                  onClick={this.props.onGroupLinkClick}
                >
                    Groups
                </button>
                <DropdownMenu {...menuOptions} >
                  <li>
                    <button className="button-as-block" onClick={onSettingsClick}>
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
      </div>
    );
  }
}

Header.propTypes = {
  inverse: false,
  onLogOut: PropTypes.func,
  onGroupLinkClick: PropTypes.func,
  onSettingsClick: PropTypes.func,
};

export default Header;
