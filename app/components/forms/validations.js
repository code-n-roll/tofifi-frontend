import messages from './messages';

export const required = (value) =>
  value || value === 0 ? undefined : messages.requiredField;

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    messages.invalidEmailAddress : undefined;

export const password = (value) =>
  value && (!/[0-9]+/.test(value) || !/[A-Z]+/.test(value) || !/[^A-Za-z0-9]+/.test(value) || value.length < 6) ?
    messages.invalidPassword : undefined;
