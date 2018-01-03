import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import InputControl from 'components/controls/InputControl';
import { required, password, equalWith } from 'components/forms/validations';
import { Link } from 'react-router/lib';
import PropTypes from 'prop-types';
import { saveNewPasswordAction } from './actions';

class RestorePasswordForm extends Component {

  propTypes = {
    clearSubmitErrors: PropTypes.function,
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { props } = this;
    return (
      <form onSubmit={props.handleSubmit(saveNewPasswordAction)}>
        <div>
          <Field
            name="newPassword"
            type="password"
            floatingLabel="New password"
            component={InputControl}
            validate={[required, password]}
          />
          <Field
            name="passwordConfirmation"
            type="password"
            floatingLabel="New password confirmation"
            component={InputControl}
            validate={[required, password, equalWith('newPassword')]}
          />
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white big-btn big-btn-margin"
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
