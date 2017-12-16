import _ from 'lodash';

function generateUsers(count) {
  return _.times(count, (index) => (
    {
      id: index,
      username: `Anton.Dacik_${index}`,
      email: 'anton.dacik@gmail.com',
    }
  ));
}

export default generateUsers(50);
