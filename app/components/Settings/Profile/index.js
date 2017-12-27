import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileForm from 'components/forms/ProfileForm';
import './styles.css';

class ProfileComponent extends Component {
  render() {
    const { userProfile } = this.props;

    const formInitialData = (userProfile && {
      username: userProfile.username,
      email: userProfile.email,
      newPassword: '',
      avatarUrl: userProfile.avatarUrl,
    }) || null;

    return (
      <div className="profile-form-wrapper">
        <ProfileForm initialValues={formInitialData} />
      </div>
    );
  }
}

ProfileComponent.propTypes = {
  userProfile: PropTypes.object,
};

export default ProfileComponent;
