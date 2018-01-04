import React from 'react';
import { Link } from 'react-router';
import SignUpForm from 'components/forms/SignUpForm';
import UnloggedLayout from 'components/layouts/UnloggedLayout';
import GraySection from 'components/sections/GraySection';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';

class SignUpPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <UnloggedLayout>
        <GraySection>
          <OnScreenHeightSection>
            <div className="mdl-typography--text-center">
              <h1 className="logo-font" style={{marginTop: 84}}> Sign Up </h1>
              <div className="sign-in-sign-up-form-container">
                <SignUpForm />
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
        </GraySection>
      </UnloggedLayout>
    );
  }
}

export default SignUpPage;
