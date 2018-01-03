import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UnloggedLayout from 'components/layouts/UnloggedLayout';
import ForgotPasswordForm from 'components/forms/ForgotPasswordForm';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';

class ForgotPasswordPage extends Component {
  render() {
    return (
      <UnloggedLayout>
        <OnScreenHeightSection>
          <div className="mdl-typography--text-center" style={{ position: 'relative', zIndex: 2, marginTop: 164 }}>
            <div className="sign-in-sign-up-form-container">
                <h5 style={{width:'320px', marginLeft:'20px'}}>
                    Enter your e-mail for a link to restore your password
                </h5>
                <ForgotPasswordForm/>
            </div>

            <h4 className="text-white"> OR </h4>

            <button
              className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white big-btn"
              onClick={() => this.props.router.push('sign_in')}
            >
              Go to sign in
            </button>
          </div>
        </OnScreenHeightSection>
      </UnloggedLayout>
    );
  }
}

ForgotPasswordPage.propTypes = {
  router: PropTypes.any,
};

export default ForgotPasswordPage;
