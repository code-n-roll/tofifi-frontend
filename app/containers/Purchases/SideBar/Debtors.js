import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import CustomScroll from 'react-custom-scroll';
import TextField from 'material-ui/TextField';
import Badge from 'material-ui/Badge';
import { connect } from 'react-redux';
import { setDebtModalState, setUserData } from 'pages/common/actions';
import { red500, green500, grey500 } from 'material-ui/styles/colors';

import './styles.css';

const badgeStyle = {
  top: 35,
  right: -7,
  borderRadius: 7,
  height: 'auto',
  minWidth: 22,
  padding: '0 5px',
  width: 'auto',
  backgroundColor: green500,
};

class Debtors extends Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.payOffDebt = this.payOffDebt.bind(this);

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

  payOffDebt(user) {
    debugger;
    this.props.setDebtModalState(true);
    this.props.setUserData(user);
  }

  render() {
    const { statistic } = this.props;

    if (!statistic) {
      return null;
    }

    const users = this.filterUsers(statistic.users);
    const { totalStats } = statistic;

    return (
      <div className="debtors-container">
        <div className="debtors-my-statistic">
          <div style={{ color: green500 }}>{totalStats.debtToMe.toFixed(2)}</div>
          <div style={{ color: red500 }}>{totalStats.myDebt.toFixed(2)}</div>
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
                <div style={{ position: 'absolute', left: 10 }} onClick={() => this.payOffDebt(user)}>
                  <Badge
                    badgeContent={Math.round(Math.abs(user.debt))}
                    primary
                    badgeStyle={
                      user.debt > 0 ? badgeStyle :
                        user.debt == 0 ?
                        { ...badgeStyle, backgroundColor: grey500 } :
                        { ...badgeStyle, backgroundColor: red500 }
                    }
                    style={{ padding: 0 }}
                  >
                    <Avatar name={user.username} round size={50} style={{ opacity: 0.5 }} />
                  </Badge>
                </div>
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
  setDebtModalState: PropTypes.func,  
  setUserData: PropTypes.func,
};

const mapDispatchToProps = {
  setDebtModalState,
  setUserData,
};

export default connect(()=>{return {}}, mapDispatchToProps)(Debtors);
