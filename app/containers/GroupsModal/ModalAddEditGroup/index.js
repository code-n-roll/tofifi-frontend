import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SelectUsersList from 'components/Users/SelectUsersList';
import { makeSelectUsers } from 'pages/common/selectors';
import { createGroupRequest, updateGroupRequest } from 'pages/common/actions';
import ListFilter from 'components/ListFilter';
import FlatButton from 'material-ui/FlatButton';

class ModalAddEditGroup extends Component {
  constructor(props) {
    super(props);

    this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
    this.handleUserStatusChange = this.handleUserStatusChange.bind(this);
    this.processUsers = this.processUsers.bind(this);
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);

    this.state = {
      groupName: '',
      selectedUsers: [],
    };
  }

  componentDidMount() {
    const { props } = this;

    if (props.isEditMode) {
      this.setState({
        groupName: props.group.name,
        selectedUsers: props.group.users,
      });
    }
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

  handleSubmitButtonClick() {
    const selectedUsersIds = this.state.selectedUsers.map((user) => user.id);
    const data = {
      name: this.state.groupName,
      userIds: selectedUsersIds,
    };

    if (this.props.isEditMode) {
      this.props.updateGroupRequest({ groupId: this.props.group.id, data });
    } else {
      this.props.createGroupRequest(data);
    }

    this.props.onSubmitClick();
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
              value={this.state.groupName}
              maxLength="18"
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
          listItemsPrefix="create-edit-group"
          heightRelativeToParent="calc(100% - 180px)"
          listProps={{
            onUserStatusChange: this.handleUserStatusChange,
            listItemsPrefix: 'create-edit-group',
          }}
        />

        <div className="create-group-back-button">
          <FlatButton
            label="Back"
            secondary={true}
            onClick={this.props.onBackClick}/>

          <FlatButton
            label={this.props.isEditMode ? 'Save changes' : 'Create'}
            primary={true}
            disabled={(!this.state.selectedUsers || this.state.groupName.trim() === '')}
            onClick={this.handleSubmitButtonClick}/>
        </div>
      </div>
    );
  }
}

ModalAddEditGroup.propTypes = {
  users: PropTypes.array,
  onSubmitClick: PropTypes.func,
  createGroupRequest: PropTypes.func,
  updateGroupRequest: PropTypes.func,
  onBackClick: PropTypes.func,
  isEditMode: PropTypes.bool,
  group: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

const mapDispatchToProps = {
  createGroupRequest,
  updateGroupRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddEditGroup);
