import React, { Component } from 'react';

import ProfileForm from 'components/forms/ProfileForm';
import './styles.css';

export default class ProfileComponent extends Component {
  render() {
    return (
      <div className="profile-form-wrapper">
        <ProfileForm />
      </div>
    );
  }
}
