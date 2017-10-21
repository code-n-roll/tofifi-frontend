import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'components/MainLayout';
import SignInForm from 'components/forms/SignInForm';
import OnScreenHeightSection from 'components/MainLayout/sections/OnScreenHeightSection';
import styles from './styles';

class SignInPage extends Component {
  render() {
    console.log(this.props);
    return (
      <MainLayout>
        <OnScreenHeightSection>
          <div style={styles.imageContainer}>
            <div style={styles.imageOpacity} />
          </div>
          <div className="mdl-typography--text-center" style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="logo-font text-green"> WisePay </h1>
            <h3 className="text-green">the best way to share payments</h3>
            <div style={styles.formContainer}>
              <SignInForm />
            </div>
            <h4 className="text-white"> OR </h4>

            <button
              className="mdl-button mdl-js-button mdl-button--raised big-btn bg-green text-white"
              onClick={() => this.props.router.push('sign_up')}
            >
              Go To Sign up
            </button>
          </div>
        </OnScreenHeightSection>
      </MainLayout>
    );
  }
}

SignInPage.propTypes = {
  router: PropTypes.any,
};

export default SignInPage;
