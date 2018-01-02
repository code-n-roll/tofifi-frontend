import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import ImageInputControl from 'components/controls/ImageInputControl';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import InputControl from 'components/controls/InputControl';
import { updateProfile } from './actions';
import { required, email } from 'components/forms/validations';
import { validate } from './validation';
import './styles.css';


class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);

    this.state = {
      changePassword: false,
    };
  }

  handleNewPasswordChange(e, value) {
    const changePassword = !!e.target.value;
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
          <TextField
            name="username"
            type="text"
            floatingLabelText="Username"
            defaultValue={initialValues.get('username')}
            component={InputControl}
          />
        </div>
        <div>
          <TextField
            name="email"
            type="email"
            floatingLabelText="Email"
            defaultValue={initialValues.get('email')}
            component={InputControl}
          />
        </div>
        <div>
          <TextField
            name="newPassword"
            type="password"
            floatingLabelText="New password"
            defaultValue={initialValues.get('newPassword')}
            onValueChange={this.handleNewPasswordChange}
            component={InputControl}
          />
        </div>
        {
          this.state.changePassword &&
            <div>
              <div>
                <TextField
                  name="passwordConfirmation"
                  type="password"
                  floatingLabelText="Password confirmation"
                  component={InputControl}
                />
              </div>
              <div>
                <TextField
                  name="password"
                  type="password"
                  floatingLabelText="Current password"
                  component={InputControl}
                />
              </div>
            </div>
        }
        <div>
          {error && <div className="profile-form__error">{error}</div>}
        </div>
        <RaisedButton
          type="submit"
          label="Save"
          primary={true}
          disabled={pristine || submitting || invalid}
          style={{float: 'right', marginTop: 59}}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'ProfileForm',
  validate,
})(ProfileForm);
