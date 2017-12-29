import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required, email } from 'components/forms/validations';
import { Link } from 'react-router/lib';
import PropTypes from 'prop-types';
import { signIn } from './actions';

class SignInForm extends Component {
  handleEmailValueChange = () => {
    this.props.clearSubmitErrors();
  }

  render() {
    const { props } = this;

    return (
      <form onSubmit={props.handleSubmit(signIn)} autoComplete="off">
        <div>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            onValueChange={this.handleEmailValueChange}
            component={InputControl}
            validate={[required, email]}
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            component={InputControl}
            validate={[required]}
            style={{ paddingBottom: '0px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Link to="/forgot_password" className="forgot-pass-link mdl-navigation__link">
            I&apos;m forgot password
          </Link>
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white big-btn big-btn-margin"
          disabled={props.submitting || props.invalid}
          type="submit"
        >
          Sign in
        </button>

      </form>
    );
  }
}

SignInForm.propTypes = {
  clearSubmitErrors: PropTypes.func,
};

export default reduxForm({
  form: 'SignInForm',
})(SignInForm);
