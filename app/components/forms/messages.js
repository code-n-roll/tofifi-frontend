import { defineMessages } from 'react-intl';

export default defineMessages({
  requiredField: {
    id: 'app.components.forms.requiredField',
    defaultMessage: 'This field is required',
  },
  invalidEmailAddress: {
    id: 'app.components.forms.invalidEmailAddress',
    defaultMessage: 'Invalid email address',
  },
  invalidPassword: {
    id: 'app.components.forms.invalidPassword',
    defaultMessage: 'Password must be at least 6 characters',
  },
  passwordsDontMatch: {
    id: 'app.components.forms.passwordsDontMatch',
    defaultMessage: 'Passwords don\'t match',
  },
  emailExists: {
    id: 'app.components.forms.emailExists',
    defaultMessage: 'User with such email is aleady registered',
  },
  wrongCredentials: {
    id: 'app.components.forms.wrongCredentials',
    defaultMessage: 'Wrong credentials. Try again.',
  },
});
