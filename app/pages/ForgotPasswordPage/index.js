import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UnloggedLayout from 'components/layouts/UnloggedLayout';
import ForgotPasswordForm from 'components/forms/ForgotPasswordForm';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkSent: false,
    };
  }

  render() {
    return (
      <UnloggedLayout>
        <OnScreenHeightSection>
          <div className="mdl-typography--text-center" style={{ position: 'relative', zIndex: 2, marginTop: 164 }}>
            <div className="sign-in-sign-up-form-container">
              {
                this.state.linkSent ?
                (
                  <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h5> Link is successfully sent to your email. </h5>
                    <button
                      className="mdl-button mdl-js-button mdl-button--raised big-btn bg-blue text-white"
                      onClick={() => this.props.router.push('sign_in')}
                    >
                      Go To Sign in
                    </button>
                  </div>
                ) :
                (
                  <div>
                    <h5 style={{ width: '320px', marginLeft: '20px' }}>
                      Enter your e-mail for a link to restore your password
                    </h5>
                    <ForgotPasswordForm onSubmitSuccess={() => this.setState({ linkSent: true })} />
                  </div>
                )
              }
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
