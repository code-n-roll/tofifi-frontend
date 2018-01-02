import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UnloggedLayout from 'components/layouts/UnloggedLayout';
import RestorePasswordForm from 'components/forms/RestorePasswordForm';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';

class RestorePasswordPage extends Component {
  render() {
    return (
      <UnloggedLayout>
        <OnScreenHeightSection>
          <div className="mdl-typography--text-center" style={{ position: 'relative', zIndex: 2, marginTop: 160 }}>
            <div className="sign-in-sign-up-form-container">
                <h5>Enter your new password</h5>
                <RestorePasswordForm/>
            </div>
          </div>
        </OnScreenHeightSection>
      </UnloggedLayout>
    );
  }
}

RestorePasswordPage.propTypes = {
  router: PropTypes.any,
};

export default RestorePasswordPage;
