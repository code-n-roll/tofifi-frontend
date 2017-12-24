import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import { makeSelectUsers, makeSelectGroups, makeSelectGroupUsers } from 'pages/common/selectors';
import { getGroupUsersRequest } from 'pages/common/actions';
import SelectUsersList from 'components/Users/SelectUsersList';
import GroupsList from 'components/Groups/GroupsList';
import ListFilter from 'components/ListFilter';
import purchaseImage from './images/purchase.png';

class CreatePurchaseStep1 extends Component {
  constructor(props) {
    super(props);

    this.handleGroupItemClick = this.handleGroupItemClick.bind(this);
    this.handleUserStatusChange = this.handleUserStatusChange.bind(this);
    this.handleCreatePurchaseButtonClick = this.handleCreatePurchaseButtonClick.bind(this);
    this.processUsers = this.processUsers.bind(this);
    this.handlePurchaseNameInputChange = this.handlePurchaseNameInputChange.bind(this);

    this.state = {
      selectedGroup: null,
      selectedUsers: null,
      step: 1,
      purchaseName: '',
    };
  }

  componentDidUpdate() {
    const groupUsers = this.props.groupUsers;

    if (this.state.selectedGroup && groupUsers.groupId === this.state.selectedGroup && groupUsers.users !== this.state.selectedUsers) {
      this.setState({
        selectedUsers: groupUsers.users,
      });
    }
  }

  handleGroupItemClick(group) {
    this.props.getGroupUsersRequest(group.id);
    this.setState({ selectedGroup: group.id, step: 2 });
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

  handleCreatePurchaseButtonClick() {
    const selectedUsersIds = this.state.selectedUsers.map((u) => u.id);
    browserHistory.push(`?createPurchase=${selectedUsersIds.join(',')}&name=${this.state.purchaseName}`);
    this.props.onCancelClick();
  }

  handlePurchaseNameInputChange(e) {
    this.setState({ purchaseName: e.target.value });
  }

  processUsers(users) {
    return users.map((user) => ({
      ...user,
      selected: this.state.selectedUsers && _.findIndex(this.state.selectedUsers, { id: user.id }) !== -1,
    }));
  }

  render() {
    return (
      <div className="fill-parent">
        { this.state.step === 1 && (
          <div className="create-purchase_groups">
            <ListFilter
              renderList={GroupsList}
              items={this.props.groups}
              filterProp="name"
              itemsPropName="groups"
              inputPlaceholder="Enter team name"
              listContainerClassName="create-purchase_groups-list"
              listProps={{
                onGroupItemClick: this.handleGroupItemClick,
                selectedGroup: this.state.selectedGroup,
              }}
            />
            <div className="create-purchase_next-step">
              <button
                className="mdl-button mdl-js-button mdl-button--raised bg-gray"
                onClick={this.props.onCancelClick}
              >
                Cancel
              </button>

              <button
                className="mdl-button mdl-js-button mdl-button--raised bg-green text-white"
                onClick={() => this.setState({ step: 2 })}
              >
                Skip
              </button>
            </div>
          </div>
        )}
        { this.state.step === 2 && (
          <div className="users">
            <div className="create-purchase__name" style={{ position: 'relative', height: 70 }}>
              <img src={purchaseImage} style={{ width: 50, height: 50, position: 'absolute', left: 10, top: 10 }} />
              <div className="mdl-textfield" style={{ width: 170, marginLeft: 80, float: 'left' }}>
                <input
                  name="purchase-name"
                  onChange={this.handlePurchaseNameInputChange}
                  className="mdl-textfield__input"
                />
                {this.state.purchaseName === '' &&
                  <label
                    className="mdl-textfield__label"
                    htmlFor="purchase-name"
                  >Enter purchase name</label>
                }
              </div>
            </div>
            <ListFilter
              renderList={SelectUsersList}
              items={this.processUsers(this.props.users)}
              filterProp="username"
              itemsPropName="users"
              inputPlaceholder="Enter user name"
              listContainerClassName="create-purchase_users-list"
              listProps={{
                onUserStatusChange: this.handleUserStatusChange,
              }}
            />
            <div className="create-purchase_next-step">
              <button
                className="mdl-button mdl-js-button mdl-button--raised bg-gray"
                onClick={this.props.onCancelClick}
              >
                Cancel
              </button>

              <button
                className="mdl-button mdl-js-button mdl-button--raised bg-green text-white"
                disabled={(!this.state.selectedUsers || this.state.selectedUsers.length === 0 || this.state.purchaseName === '')}
                onClick={this.handleCreatePurchaseButtonClick}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

CreatePurchaseStep1.propTypes = {
  users: PropTypes.array,
  groups: PropTypes.array,
  groupUsers: PropTypes.array,
  getGroupUsersRequest: PropTypes.func,
  onCancelClick: PropTypes.func,
  onCreatePurchaseButtonClick: PropTypes.func,
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
