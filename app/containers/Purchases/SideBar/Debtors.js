import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import CustomScroll from 'react-custom-scroll';
import './styles.css';

class Debtors extends Component {
  render() {
    const { statistic } = this.props;
    return (
      <div className="debtors-container">
        <CustomScroll heightRelativeToParent="calc(100% - 50px)">
          <div className="debtors-my-statistic">
            <Avatar name="anton.dacik@gmail.com" size={50} style={{ opacity: 0.5 }} />
          </div>
          <div className="debtors-users">
            {statistic.users.map((user) => (
              <div className="debtor-item">
                <Avatar name={user.username} round size={50} style={{ opacity: 0.5 }} />
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
