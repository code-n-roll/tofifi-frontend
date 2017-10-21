import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required, email } from 'components/forms/validations';
import { signIn } from './actions';

class SignInForm extends Component {

  constructor(args) {
    super(args);

    this.handleEmailValueChange = this.handleEmailValueChange.bind(this);
  }

  handleEmailValueChange() {
    this.props.clearSubmitErrors();
  }

  render() {
    const { props } = this;

    return (
      <form onSubmit={props.handleSubmit(signIn)} autoComplete="off">
        <div style={{ paddingBottom: '30px' }}>
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
          />
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-green text-white"
          disabled={props.submitting || props.invalid}
          type="submit"
          style={{ width: '100%' }}
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
