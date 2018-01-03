import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required, password } from 'components/forms/validations';
import { Link } from 'react-router/lib';
import PropTypes from 'prop-types';
import { restorePassword } from './actions';

class RestorePasswordForm extends Component {
  propTypes = {
    clearSubmitErrors: PropTypes.function,
  }

  render() {
    const { props } = this;

    return (
      <form onSubmit={props.handleSubmit(restorePassword)} autoComplete="off">
        <div>
          <div style={{ maxHeight: 72 }}>
            <Field
              name="new_password"
              type="password"
              className="log-in-log-out-field"
              floatingLabel="New password"
              component={InputControl}
              validate={[required]}
            />
          </div>
          <div style={{ maxHeight: 72 }}>
            <Field
              name="new_password_confirmation"
              type="password"
              className="log-in-log-out-field"
              floatingLabel="Confirm password"
              component={InputControl}
              validate={[required]}
            />
          </div>
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white big-btn big-btn-margin"
          style={{marginTop: 30}}
          disabled={props.submitting || props.invalid}
          type="submit"
        >
          Save
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'RestorePasswordForm',
})(RestorePasswordForm);
