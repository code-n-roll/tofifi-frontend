import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import CustomScroll from 'react-custom-scroll';
import TextField from 'material-ui/TextField';

import './styles.css';

class Debtors extends Component {
  render() {
    const { statistic } = this.props;
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
          />
        </div>
        <CustomScroll heightRelativeToParent="calc(100% - 110px)">
          <div className="debtors-users">
            {statistic.users.map((user) => (
              <div className="debtor-item">
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
