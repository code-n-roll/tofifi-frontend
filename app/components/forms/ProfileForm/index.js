import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import ImageInputControl from 'components/controls/ImageInputControl';

import InputControl from 'components/controls/InputControl';
import { updateProfile } from './actions';
import { required, email } from 'components/forms/validations';
import { validate } from './validation';
import './styles.css';


class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changePassword: false,
    };
  }

  handleNewPasswordChange(e, value) {
    const changePassword = !!value;
    this.setState({ changePassword });
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid, error, initialValues } = this.props;

    return (
      <form
        onSubmit={handleSubmit(updateProfile)}
        className="profile-form"
        autoComplete="off"
      >
        <div>
          <Field
            className="fileInput"
            name="avatar"
            component={ImageInputControl}
            username={initialValues.get('username')}
            avatarUrl={initialValues.get('avatarUrl')}
          />
        </div>
        <div>
          <Field
            name="username"
            type="text"
            placeholder="Username"
            component={InputControl}
          />
        </div>
        <div>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            component={InputControl}
          />
        </div>
        <div>
          <Field
            name="newPassword"
            type="password"
            placeholder="New password"
            onChange={this.handleNewPasswordChange}
            component={InputControl}
          />
        </div>
        {
          this.state.changePassword &&
            <div>
              <div>
                <Field
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Password confirmation"
                  component={InputControl}
                />
              </div>
              <div>
                <Field
                  name="currentPassword"
                  type="password"
                  placeholder="Current password"
                  component={InputControl}
                />
                <Field
                  name="samePassword"
                  type="password"
                  component={InputControl}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
        }
        <div>
          {error && <div className='profile-form__error'>{error}</div>}
        </div>
        <button
          type="submit"
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white"
          disabled={pristine || submitting || invalid}
        >
          Save
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ProfileForm',
  validate,
})(ProfileForm);
