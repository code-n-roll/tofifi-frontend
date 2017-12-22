import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoggedLayout from 'components/layouts/LoggedLayout';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';
import SettingsComponent from 'components/Settings';
import { fetchCurrentUser } from './actions';

class SettingsPage extends Component {
  componentWillMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <LoggedLayout>
        <OnScreenHeightSection>
          <SettingsComponent />
        </OnScreenHeightSection>
      </LoggedLayout>
    );
  }
}

SettingsComponent.propTypes = {
  fetchCurrentUser: PropTypes.func
};

const mapStateToProps = (state) => ({
  userProfile: state.userProfile
});

const mapDispatchToProps = {
  fetchCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
