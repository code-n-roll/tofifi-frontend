import _ from 'lodash';

function generateUsers(count) {
  return _.times(count, (index) => ({
    id: index,
    username: 'asd',
  }));
}

export default () => generateUsers(Math.floor(Math.random() * 20));
