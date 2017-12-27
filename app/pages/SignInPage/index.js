import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UnloggedLayout from 'components/layouts/UnloggedLayout';
import SignInForm from 'components/forms/SignInForm';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';

class SignInPage extends Component {
  render() {
    return (
      <UnloggedLayout>
        <OnScreenHeightSection>
          <div className="mdl-typography--text-center" style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="logo-font text-white"> WisePay </h1>
            <h3 className="logo-sub-font text-white">the best way to share payments</h3>
            <div className="sign-in-sign-up-form-container">
              <SignInForm />
            </div>
            <h4 className="text-white"> OR </h4>

            <button
              className="mdl-button mdl-js-button mdl-button--raised big-btn bg-blue text-white"
              onClick={() => this.props.router.push('sign_up')}
            >
              Go To Sign up
            </button>
          </div>
        </OnScreenHeightSection>
      </UnloggedLayout>
    );
  }
}

SignInPage.propTypes = {
  router: PropTypes.any,
};

export default SignInPage;
