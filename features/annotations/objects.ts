// Objects

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// ES2015 destructuring -> in the case of destructuring we have to use the structure of the expected value
const { age }: { age: number } = profile;

//
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
