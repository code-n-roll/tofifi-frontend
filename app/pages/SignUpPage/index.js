import React from 'react';
import SignUpForm from 'components/forms/SignUpForm';
import { Link } from 'react-router';
import styles from './styles';

class SignUpPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}> Sign Up </h1>
        <div style={styles.formContainer}>
          <SignUpForm />
        </div>
        <Link to='sign_in'>Go to sign in</Link>
      </div>
    );
  }
}

export default SignUpPage;
