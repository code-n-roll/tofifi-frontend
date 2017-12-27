export function formatAddBankCardData(formData) {
  let [firstName, lastName] = formData.name.split(/\s+/);

  return {
    cardNumber: formData.number,
    holder: {
      firstName,
      lastName
    },
    cvc: formData.cvc,
    validTo: {
      month: formData.expiryMonth,
      year: formData.expiryYear
    }
  }
}
