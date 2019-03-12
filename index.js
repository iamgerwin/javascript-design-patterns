class Car
{
    constructor(door, engine, color)
    {
        this.door = door;
        this.engine = engine;
        this.color = color;
        this.passenger = 4;
    }
}

class Suv extends Car
{
    constructor(door, engine, color, passenger = 7)
    {
        super(door, engine, color);
        this.passenger = passenger;
    }
}
class SuvFactory
{
    createVehicle(type) {
        switch (type) {
            case 'dmax':
                return new Suv(4, 'V8', 'pink');
            case 'montero':
                return new Suv(4, 'V12', 'fuchsia'); 
        }
    }
}


class CarFactory
{
    createVehicle(type) {
        switch (type) {
            case 'vios':
                return new Car(4, 'V4', 'black');
            case 'civic':
                return new Car(2, 'V8', 'white'); 
        }
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
    

    switch (type) {
        case 'car':
            return carFactory.createVehicle(model);
        case 'suv':
            return suvFactory.createVehicle(model);
    }
}

const vehicle1 = autoManufacturer('suv', 'montero');
const vehicle2 = autoManufacturer('car', 'civic');

console.log(vehicle1);
console.log(vehicle2);