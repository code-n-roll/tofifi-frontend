import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import CustomScroll from 'react-custom-scroll';
import TextField from 'material-ui/TextField';
import Badge from 'material-ui/Badge';

import './styles.css';

class Debtors extends Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.filterUsers = this.filterUsers.bind(this);

    this.state = {
      filter: '',
    };
  }

  handleFilterChange(e, v) {
    this.setState({ filter: v });
  }

  filterUsers() {
    const users = this.props.statistic.users;

    return users.filter((user) => user.username.indexOf(this.state.filter.toLowerCase()) !== -1);
  }

  render() {
    const { statistic } = this.props;
    const users = this.filterUsers(statistic.users);
    return (
      <div className="debtors-container">
        <div className="debtors-my-statistic">
          <Avatar name="anton.dacik@gmail.com" size={50} style={{ opacity: 0.5 }} />
        </div>
        <div className="debtors-search">
          <TextField
            hintText="Enter username"
            style={{ width: 150 }}
            underlineFocusStyle={{ borderColor: 'rgb(67, 124, 167)' }}
            onChange={this.handleFilterChange}
          />
        </div>
        <CustomScroll heightRelativeToParent="calc(100% - 60px)">
          <div className="debtors-users">
            {users.map((user) => (
              <div key={user.id} className="debtor-item">
                <Avatar name={user.username} round size={50} style={{ opacity: 0.5, position: 'absolute', left: 10 }} />
                <span className="debtor-username">{user.username}</span>
              </div>
            ))}
          </div>
        </CustomScroll>
      </div>
    );
  }
}

Debtors.propTypes = {
  statistic: PropTypes.object,
};

export default Debtors;
