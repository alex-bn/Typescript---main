import { User } from './models/User';

const user = new User({ name: 'refactor', age: 11 });
// user.save();
user.events.on('click', () => {
  console.log('change');
});

user.events.trigger('click');
