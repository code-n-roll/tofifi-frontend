import messages from './messages';

export const required = (value) =>
  value || value === 0 ? undefined : messages.requiredField;
