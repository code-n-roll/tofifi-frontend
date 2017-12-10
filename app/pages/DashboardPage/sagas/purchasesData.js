import _ from 'lodash';

function generatePurchasesData(count) {
  return _.times(count, (index) => (
    {
      id: index,
      name: `Purchase ${index}`,
      users: [
        {
          userId: 1,
          sum: 200,
          isPayedOff: true,
        },
        {
          userId: 2,
          sum: 10,
          isPayedOff: false,
        },
      ],
    }
  ));
}

export default generatePurchasesData(50);
