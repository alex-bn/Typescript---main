import { User } from './models/User';

const user = new User({ id: 4, name: 'New Name', age: 2 });

user.on('save', () => {
  console.log(user);
});

user.save();
