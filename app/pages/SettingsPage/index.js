import React, { Component } from 'react';
import LoggedLayout from 'components/layouts/LoggedLayout';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';
import SettingsComponent from 'components/Settings';

export default class SettingsPage extends Component {
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
