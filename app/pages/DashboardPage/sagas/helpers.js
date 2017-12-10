export function processPurchaseFormDataApi(purchase) {
  const result = {
    totalSum: Number.parseFloat(purchase.totalSum),
    users: [],
  };

  Object.keys(purchase.users).forEach((key) => {
    if (purchase.users.hasOwnProperty(key)) {
      result.users.push({
        userId: key,
        sum: purchase.users[key].sum,
      });
    }
  });

  return result;
}
