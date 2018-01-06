export const processGroupsReact = (groups, currentUser) => (
  groups.map((group) => (
    group.adminId === currentUser.id ? {...group, isOwner: true} : group
  ))
);

export const formatAddBankCardData = (formData) => {
  const [firstName, lastName] = formData.name.split(/\s+/);

  return {
    cardNumber: formData.number,
    holder: {
      firstName,
      lastName,
    },
    cvc: formData.cvc,
    validTo: {
      month: formData.expiryMonth,
      year: formData.expiryYear,
    },
  };
};
