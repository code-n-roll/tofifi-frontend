import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignInForm from 'components/forms/SignInForm';
import styles from './styles';
import { Link } from 'react-router';

class SignInPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}> Sign In </h1>
        <div style={styles.formContainer}>
          <SignInForm />
        </div>
        <Link to='sign_up'>Go to sign up</Link>
      </div>
    );
  }
}

export default SignInPage;
