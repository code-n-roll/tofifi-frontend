import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import { logOutRequest } from 'containers/App/actions';

class DashboardPage extends Component {
  render() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return null;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <h2> Dashboard page </h2>
        <p>{this.props.currentUser.email}</p>
        <a href="" onClick={this.props.logOutRequest}>Log out</a>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  currentUser: PropTypes.object,
  logOutRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const mapDispatchToProps = {
  logOutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
