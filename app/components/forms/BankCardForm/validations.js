import messages from './messages';

export const cvc = value =>
  value.length === 3 ? undefined : messages.invalidCvc;

export const cardNumber = value =>
  value.length === 16 ? undefined : messages.invalidCardNumber;

export const holderName = value => {
  let [firstName, lastName] = value.split(/\s+/);
  if (!firstName || !lastName) {
    return messages.invalidHolderName;
  }
}

export const year = value =>
  18 > value ? messages.invalidYear : undefined;

