import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { signIn } from './actions';

class SignInForm extends Component {
  render() {
    const { props } = this;

    return (
      <form onSubmit={props.handleSubmit(signIn)}>
        <div>
          <Field
            name="email"
            type="text"
            placeholder="Email"
            component={InputControl}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            component={InputControl}
          />
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised"
          disabled={props.submitting || props.invalid}
          type="submit"
        >
          Sign in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignInForm',
})(SignInForm);
