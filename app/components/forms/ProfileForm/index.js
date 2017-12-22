import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import InputControl from 'components/controls/InputControl';
import { updateProfile } from './actions';
import { required, email } from 'components/forms/validations';
import './styles.css';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(updateProfile)}
        className="profile-form"
      >
        <div>
          <Field
            name="username"
            type="text"
            placeholder="Username"
            component={InputControl}
            validate={[required, email]}
          />
        </div>
        <div>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            component={InputControl}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            placeholder="Current password"
            component={InputControl}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            placeholder="New password"
            component={InputControl}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            placeholder="Password confirmation"
            component={InputControl}
          />
        </div>
        <button type="submit"
          className="mdl-button mdl-js-button mdl-button--raised bg-blue text-white"
        >
          Save
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'ProfileForm'
})(ProfileForm);
