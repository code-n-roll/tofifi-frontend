import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LoggedLayout from 'components/layouts/LoggedLayout';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';
import SettingsComponent from 'components/Settings';
import { fetchCurrentUser } from './actions';
import { selectUserProfile } from './selectors';

class SettingsPage extends Component {
  componentWillMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <LoggedLayout>
        <OnScreenHeightSection>
          <SettingsComponent userProfile={this.props.userProfile}/>
        </OnScreenHeightSection>
      </LoggedLayout>
    );
  }
}

SettingsComponent.propTypes = {
  fetchCurrentUser: PropTypes.func,
  userProfile: PropTypes.object
};

const mapStateToProps = (state) => ({
  userProfile: selectUserProfile(state)
});

const mapDispatchToProps = {
  fetchCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
