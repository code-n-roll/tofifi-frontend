export const month = (value, prevValue) =>
  !value || (value >= 1 && value <= 12) ? value : prevValue;
export const year = (value, prevValue) =>
  !value || (value >= 1 && value <= 99) ? value : prevValue;
export const cvc = (value, prevValue) =>
  !value || (value.length <= 3) ? value : prevValue;
export const name = (value, prevValue) =>
  !value || (value.length <= 50) ? value : prevValue;
export const number = (value, prevValue) =>
  !value || (value.length <= 16) ? value : prevValue;
