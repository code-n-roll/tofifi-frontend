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
    const participantsIds = query.createPurchase.split(',').map((id) => Number.parseInt(id, 10));
    return resultFormat(PAGE_STATES.createPurchase, participantsIds);
  }

  return resultFormat(PAGE_STATES.welcome);
}
