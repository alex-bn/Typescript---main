import { User } from './models/User';

const user = new User({ name: 'myname', age: 46 });

user.set({ name: 'newname' });
user.set({ age: 23 });
user.set({ name: '', age: null });

console.log(user.get('name'));
console.log(user.get('age'));
