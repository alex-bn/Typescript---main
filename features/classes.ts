// parent class
class Vehicle {
  // public drive(): void {
  //   console.log('test test');
  // }
  // color: string;

  constructor(public color: string) {}

  honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

// child class
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
car.honk();
