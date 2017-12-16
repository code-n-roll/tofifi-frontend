import _ from 'lodash';

function generateGroups(count) {
  return _.times(count, (index) => (
    {
      id: index,
      name: `Team ${index}`,
    }
  ));
}

export default generateGroups(10);
