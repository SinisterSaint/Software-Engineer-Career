class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "beep.";
    }
    
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }  
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 4;
    }

    revEngine () {
        return "VROOM!!!";
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2;
    }

    revEngine () {
        return "VROOM!!!";
    }
}

class Garage extends Vehicle {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle )){
            return "Only Vehicles are allowed here!"
        }

        if (this.Vehicle.length >= this.capacity){
            return "Sorry, we're full.";
        }
        this.vehicles.push(vehicles);
        return "Vehicle added!";
    }
}