interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  weight: 3445,
  horsePower: 80,
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};
printVehicle(oldCivic);

// refactored to a generic name
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
