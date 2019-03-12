let instance = null;

class Car
{
    constructor(door, engine, color)
    {
        if (!instance) {
            this.door = door;
            this.engine = engine;
            this.color = color;
    
        } else {
            return instance;
        }        
    }
}

class Suv extends Car
{
    constructor(door, engine, color)
    {
        super(door, engine, color);
        this.wheel = 4;
    }
}

const civic = new Car(2, 'V6', 'white');
const vios = new Car(2, 'V6', 'red');
const everest = new Suv('4', 'V8', 'blue');

console.log(civic);
console.log(everest);