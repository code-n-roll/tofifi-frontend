import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required, email, password } from 'components/forms/validations';
import { signUp } from './actions';

class SignUpForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { props } = this;

    return (
      <form onSubmit={props.handleSubmit(signUp)}>
        <div style={{ paddingBottom: '20px' }}>
          <div style={{ maxHeight: 72 }}>
            <Field
              name="email"
              type="text"
              className="log-in-log-out-field"
              floatingLabel="Email"
              component={InputControl}
              validate={[required, email]}
            />
          </div>
          <div style={{ maxHeight: 72 }}>
            <Field
              name="password"
              type="password"
              className="log-in-log-out-field"
              floatingLabel="Password"
              component={InputControl}
              validate={[required, password]}
              errorStyles={{ paddingBottom: '50px' }}
            />
          </div>
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised big-btn"
          disabled={props.submitting || props.invalid}
          style={{ marginTop: 10 }}
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
