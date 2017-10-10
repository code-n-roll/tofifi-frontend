import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required, email } from 'components/forms/validations';
import { signUp } from './actions';

class SignUpForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { props } = this;

    return (
      <form onSubmit={props.handleSubmit(signUp)}>
        <div>
          <Field
            name="email"
            type="text"
            placeholder="Email"
            component={InputControl}
            validate={[required, email]}
          />
        </div>
        <div>
          <Field
            name="username"
            type="text"
            placeholder="Username"
            component={InputControl}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            component={InputControl}
            validate={[required]}
          />
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised"
          disabled={props.submitting || props.invalid}
        >
          Sign up
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignUpForm',
})(SignUpForm);
