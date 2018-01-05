import { defineMessages } from 'react-intl';

export default defineMessages({
  invalidCvc: {
    id: 'app.components.forms.card.invalidCvc',
    defaultMessage: 'Must be 3 characters length',
  },
  invalidCardNumber: {
    id: 'app.components.forms.card.invalidCardNumber',
    defaultMessage: 'Must be 16 characters length',
  },
  invalidHolderName: {
    id: 'app.components.forms.card.invalidHolderName',
    defaultMessage: 'Invalid holder name',
  },
  invalidYear: {
    id: 'app.components.forms.card.invalidYear',
    defaultMessage: 'Year is invalid',
  }
});
