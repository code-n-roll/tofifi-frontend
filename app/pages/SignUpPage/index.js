import React from 'react';
import SignUpForm from 'components/forms/SignUpForm';
import { Link } from 'react-router';
import UnloggedLayout from 'components/layouts/UnloggedLayout';
import GraySection from 'components/sections/GraySection';
import OnScreenHeightSection from 'components/sections/OnScreenHeightSection';
import styles from './styles';

class SignUpPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <UnloggedLayout>
        <GraySection>
          <OnScreenHeightSection>
            <div className="mdl-typography--text-center">
              <h1 className="logo-font"> Sign Up </h1>
              <div style={styles.formContainer}>
                <SignUpForm />
              </div>
              <Link className="mdl-navigation__link" to="sign_in">
                Already registered? Click here
              </Link>
            </div>
          </OnScreenHeightSection>
        </GraySection>
      </UnloggedLayout>
    );
  }
}

export default SignUpPage;
