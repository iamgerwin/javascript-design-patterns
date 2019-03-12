class Car
{
    constructor(door, engine, color)
    {
        this.door = door;
        this.engine = engine;
        this.color = color;
    
    }
}

class carFactory
{
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(2, 'V6', 'grey');
            case 'vios':
                return new Car(4, 'V4', 'red'); 
        }
    }
}

const factory = new carFactory();
const car1 = factory.createCar('vios');

console.log(car1);