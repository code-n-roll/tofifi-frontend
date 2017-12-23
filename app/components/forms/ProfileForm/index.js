import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import Avatar from 'react-avatar';
import Image from 'react-image-resizer';

import InputControl from 'components/controls/InputControl';
import { updateProfile } from './actions';
import { required, email } from 'components/forms/validations';
import { validate } from './validation';
import './styles.css';

/**
 * File input workarround:
 * More info: http://redux-form.com/5.2.5/#/examples/file?_k=57hmlw
 */
const customFileInput = (field) => {
  delete field.input.value; // <-- just delete the value property
  return <input type="file" id="file" {...field.input} onChange={field.input.onChange}/>;
};

class ProfileForm extends Component {
  state = {
    changePassword: false,
    avatar: null,
    avatarPreviewUrl: null
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid, error } = this.props;
    const { avatarPreviewUrl } = this.state;
    return (
      <form onSubmit={handleSubmit(updateProfile)}
        className="profile-form"
        autoComplete="off"
      >
        <div>
          <Field className="fileInput"
              type="file"
              name="avatar"
              component={customFileInput}/>
          <div className="imgPreview">
          {
            avatarPreviewUrl !== null
            ?
              <Image
                src={avatarPreviewUrl}
                height={ 200 }
                width={ 200 }
              />
            :
              <Avatar email={"A"} size={200} round />
          }
          </div>
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
                  style={{display: 'none'}}
                />
              </div>
            </div>
        }
        <div>
          {error && <div className='profile-form__error'>{error}</div>}
        </div>
        <button type="submit"
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white"
          disabled = { pristine || submitting || invalid }
        >
          Save
        </button>
      </form>
    );
  }

  handleNewPasswordChange = (e, value) => {
    let changePassword = !!value;
    this.setState({
      changePassword: changePassword
    })
  }

  handleAvatarChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        avatar: file,
        avatarPreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
}

export default reduxForm({
  form: 'ProfileForm',
  validate
})(ProfileForm);
