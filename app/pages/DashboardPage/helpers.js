import { PAGE_STATES } from './constants';


function resultFormat(state, data = null) {
  return {
    state,
    data,
  };
}

export function getPageStateFromQuery(query) {
  if (query.purchase) {
    const purchaseId = Number.parseInt(query.purchase, 10);

    if (!Number.isNaN(purchaseId)) {
      return resultFormat(PAGE_STATES.purchaseInfo, purchaseId);
    }
  }

  if (query.createPurchase) {
    return resultFormat(PAGE_STATES.createPurchase);
  }

  return resultFormat(PAGE_STATES.welcome);
}
