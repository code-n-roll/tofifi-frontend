import _ from 'lodash';

function generatePurchasesData(count) {
  return _.times(count, (index) => (
    index % 2 === 0 ?
      {
        id: index,
        name: `Purchase ${index}`,
        users: [
          {
            userId: 1,
            username: 'TestUsername221',
            sum: 200,
            isPayedOff: true,
          },
          {
            userId: 2,
            username: 'TestUsername221',
            sum: 10,
            isPayedOff: false,
          },
        ],
        createdAt: '2017-12-10T14:10:48.23544',
        isMy: true,
      } :
      {
        creatorName: 'vlad123@gmail.com',
        sum: 5,
        isPayedOff: false,
        id: index,
        name: 'Pizza',
        createdAt: '2017-12-10T14:14:07.354764',
        isMy: false,
      }
  ));
}

export default generatePurchasesData(50);
