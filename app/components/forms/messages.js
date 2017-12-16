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
    defaultMessage: 'Password must be at least 6 characters,' +
      'have at least one non alphanumeric character, one digit, one uppercase(\'A\'-\'Z\')',
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
