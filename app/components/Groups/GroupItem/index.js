import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import ReactAvatar from 'react-avatar';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import DropdownMenu from 'react-dd-menu';

import './styles.css';

class GroupItem extends Component {
  constructor(props) {
    super(props);

    this.renderToggler = this.renderToggler.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu(e) {
    if (e) {
      e.stopPropagation();
    }

    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  renderToggler() {
    return (
      <div className="group-item-menu-toggler" onClick={this.toggleMenu}>
        <FaEllipsisV size={21} />
      </div>
    );
  }

  render() {
    const { props } = this;
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: () => this.toggleMenu(),
      align: 'right',
      toggle: this.renderToggler(),
    };

    let dropdown = null;
    if (props.withMenu) {
      if (props.isOwner) {
        dropdown = [
          {
            text: 'Edit',
            action: props.onEditClick,
          },
          {
            text: 'Remove',
            action: props.onDeleteClick,
          },
        ];
      } else {
        dropdown = [
          {
            text: 'Leave',
            action: props.onLeaveClick,
          },
        ];
      }
    }


    return (
      <div
        className="group-item"
        onClick={() => props.onClick && props.onClick(props)}
        style={props.onClick ? { cursor: 'pointer' } : { cursor: 'auto' }}
      >
        <div style={{ float: 'left' }}>
          <ReactAvatar name={props.name} round size={60} style={{ opacity: 0.7 }} />
        </div>
        <div className="group-item_info" >
          <span className="group-item_info__name">{props.name}</span>
          <div className="group-item-avatars">
            {props.users.slice(0, props.avatarsNumber).map((user) => (
              <span key={user.id}>
                {
                  <div style={{ marginRight: 7 }} className="group-user-avatar-item">
                    <Avatar username={user.username} avatarUrl={user.avatarUrl} size={30} />
                  </div>
                }
              </span>
            ))}
          </div>
        </div>
        {
          dropdown && (
            <div className="group-item-menu">
              <DropdownMenu {...menuOptions}>
                {
                  dropdown.map((menuItem) => (
                    <li
                      key={menuItem.text}
                      className="group-item-menu-item"
                      onClick={(e) => { e.stopPropagation(); menuItem.action(); }}
                    >
                      {menuItem.text}
                    </li>
                  ))
                }
              </DropdownMenu>
            </div>
          )
        }
      </div>
    );
  }
}

GroupItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  users: PropTypes.array,
  withMenu: PropTypes.bool,
  onEditClick: PropTypes.func,
};

export default GroupItem;
