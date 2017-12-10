import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import { makeSelectUsers, makeSelectGroups, makeSelectGroupUsers } from 'pages/common/selectors';
import { getGroupUsersRequest } from 'pages/common/actions';
import UsersList from 'components/Purchases/CreatePurchase/Step1/UsersList';
import GroupsList from 'components/Purchases/CreatePurchase/Step1/GroupsList';
import ListFilter from 'components/ListFilter';

class CreatePurchaseStep1 extends Component {
  constructor(props) {
    super(props);

    this.handleGroupItemClick = this.handleGroupItemClick.bind(this);
    this.handleUserStatusChange = this.handleUserStatusChange.bind(this);
    this.processUsers = this.processUsers.bind(this);

    this.state = {
      selectedGroup: null,
      selectedUsers: null,
    };
  }

  componentDidUpdate() {
    const groupUsers = this.props.groupUsers;

    if (groupUsers.groupId === this.state.selectedGroup && groupUsers.users !== this.state.selectedUsers) {
      this.setState({
        selectedUsers: groupUsers.users,
      });
    }
  }

  handleGroupItemClick(group) {
    if (this.state.selectedGroup === group.id) {
      this.setState({ selectedGroup: null, selectedUsers: null });
    } else {
      this.setState({ selectedGroup: group.id });
      if (this.props.groupUsers.groupId !== group.id) {
        this.props.getGroupUsersRequest(group.id);
      }
    }
  }

  handleUserStatusChange(modifiedUser, isSelected) {
    const selectedUsers = _.clone(this.state.selectedUsers) || [];
    if (isSelected) {
      selectedUsers.push(modifiedUser);
    } else {
      _.remove(selectedUsers, (user) => user.id === modifiedUser.id);
    }

    this.setState({ selectedUsers, selectedGroup: null });
  }

  processUsers(users) {
    return users.map((user) => ({
      ...user,
      selected: this.state.selectedUsers && _.findIndex(this.state.selectedUsers, { id: user.id }) !== -1,
    }));
  }

  render() {
    return (
      <div>
        <div className="create-purchase_groups">
          <ListFilter
            renderList={GroupsList}
            items={this.props.groups}
            filterProp="name"
            itemsPropName="groups"
            inputPlaceholder="Enter team name"
            listContainerClassName="create-purchase_groups-users-list"
            listProps={{
              onGroupItemClick: this.handleGroupItemClick,
              selectedGroup: this.state.selectedGroup,
            }}
          />
        </div>
        <div className="create-purchase_users">
          <ListFilter
            renderList={UsersList}
            items={this.processUsers(this.props.users)}
            filterProp="username"
            itemsPropName="users"
            inputPlaceholder="Enter user name"
            listContainerClassName="create-purchase_groups-users-list"
            listProps={{
              onUserStatusChange: this.handleUserStatusChange,
            }}
          />
        </div>

        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-green text-white"
          style={{ position: 'absolute', bottom: 20, right: 20 }}
          onClick={() => this.props.goToNextStep(this.state.selectedUsers)}
        >
          Next step
        </button>
      </div>
    );
  }
}

CreatePurchaseStep1.propTypes = {
  users: PropTypes.array,
  groups: PropTypes.array,
  groupUsers: PropTypes.groupUsers,
  getGroupUsersRequest: PropTypes.func,
  goToNextStep: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  groups: makeSelectGroups(),
  groupUsers: makeSelectGroupUsers(),
});

const mapDispatchToProps = {
  getGroupUsersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePurchaseStep1);
