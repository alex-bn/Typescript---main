// A class to represent a User and all of its data (like name and age)
// User class needs to have the ability to store some data, retrieve it, and change it
// The ability to notify the rest of the app when some data is changed
// User class needs to be able to persist data to an outside server and then retrieve it and some future point

/////////////

// Extraction Approach
// Build class User as a 'mega' class with tons of methods
// Refactor User to use composition
// Refactor USer to be a reusable class that can represent any piece of data, not just User

import { User } from './models/User';

const user = new User({ name: 'New Record', age: 0 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
