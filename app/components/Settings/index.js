import React, { Component } from 'react';

import Tabs from 'components/Tabs';
import Tab from 'components/Tabs/Tab';
import PaymentsComponent from './Payments';
import ProfileComponent from './Profile';

export default class SettingsComponent extends Component {
  render() {
    return (
      <Tabs>
        <Tab name="Profile">
          <ProfileComponent userProfile={this.props.userProfile}/>
        </Tab>
        <Tab name="Payments">
          <PaymentsComponent userProfile={this.props.userProfile}/>
        </Tab>
      </Tabs>
    );
  }
}
