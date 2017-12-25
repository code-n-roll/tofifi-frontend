import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SelectUsersList from 'components/Users/SelectUsersList';
import { makeSelectUsers } from 'pages/common/selectors';
import { createGroupRequest } from 'pages/common/actions';
import ListFilter from 'components/ListFilter';


class ModalAddGroup extends Component {
  constructor(props) {
    super(props);

    this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
    this.handleUserStatusChange = this.handleUserStatusChange.bind(this);
    this.processUsers = this.processUsers.bind(this);
    this.handleCreateGroupClick = this.handleCreateGroupClick.bind(this);

    this.state = {
      groupName: '',
      selectedUsers: [],
    };
  }

  handleGroupNameChange(e) {
    this.setState({ groupName: e.target.value });
  }

  handleUserStatusChange(modifiedUser, isSelected) {
    const selectedUsers = _.clone(this.state.selectedUsers) || [];
    if (isSelected) {
      selectedUsers.push(modifiedUser);
    } else {
      _.remove(selectedUsers, (user) => user.id === modifiedUser.id);
    }

    this.setState({ selectedUsers });
  }

  handleCreateGroupClick() {
    const selectedUsersIds = this.state.selectedUsers.map((user) => user.id);
    this.props.createGroupRequest({
      name: this.state.groupName,
      userIds: selectedUsersIds,
    });

    this.props.onCreateClick();
  }

   processUsers(users) {
    return users.map((user) => ({
      ...user,
      selected: this.state.selectedUsers && _.findIndex(this.state.selectedUsers, { id: user.id }) !== -1,
    }));
  }

  render() {
    return (
      <div className="users" style={{ height: 'calc(100% - 50px)' }}>
        <div style={{ position: 'relative', height: 70 }}>
          <div className="mdl-textfield" style={{ width: 170, marginLeft: 20, float: 'left' }}>
            <input
              name="group-name"
              onChange={this.handleGroupNameChange}
              className="mdl-textfield__input"
            />
            {this.state.groupName === '' &&
              <label
                className="mdl-textfield__label"
                htmlFor="group-name"
              >Enter group name</label>
            }
          </div>
        </div>
        <ListFilter
          renderList={SelectUsersList}
          items={this.processUsers(this.props.users)}
          filterProp="username"
          itemsPropName="users"
          inputPlaceholder="Enter user name"
          listContainerClassName="users-list create-group-users-list"
          listProps={{
            onUserStatusChange: this.handleUserStatusChange,
          }}
        />
        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white create-group-button "
          disabled={(!this.state.selectedUsers || this.state.groupName === '')}
          onClick={this.handleCreateGroupClick}
        >
          Create
        </button>
      </div>
    );
  }
}

ModalAddGroup.propTypes = {
  users: PropTypes.array,
  onCreateClick: PropTypes.func,
  createGroupRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

const mapDispatchToProps = {
  createGroupRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddGroup);
