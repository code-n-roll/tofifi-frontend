import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required, email } from 'components/forms/validations';
import { forgotPassword } from './actions';

class ForgotPasswordForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submitSucceeded) {
      this.props.onSubmitSuccess();
    }
  }

  render() {
    const { props } = this;

    return (
      <form onSubmit={props.handleSubmit(forgotPassword)}>
        <div style={{ paddingBottom: '20px' }}>
          <div>
            <Field
              name="email"
              type="text"
              floatingLabel="Email"
              component={InputControl}
              validate={[required, email]}
            />
          </div>
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white big-btn big-btn-margin"
          disabled={props.submitting || props.invalid}
          type="submit"
        >
          Send
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ForgotPasswordForm',
})(ForgotPasswordForm);
