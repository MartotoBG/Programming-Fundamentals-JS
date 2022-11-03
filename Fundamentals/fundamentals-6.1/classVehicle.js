
    
   class Vehicle {

    constructor(type, model, parts, fuel) {
            this.type = type,
            this.model = model,
            this.parts = parts,
            this.fuel = fuel,
            this.parts.quality = parts.engine * parts.power   
    }
    drive (fuelLoss){
        this.fuel -= fuelLoss;
    }
}
   
   
   let parts = { engine: 6, power: 100 };

   let vehicle = new Vehicle('a', 'b', parts, 200);
   
   vehicle.drive(100);
   
   console.log(vehicle.fuel);
   
   console.log(vehicle.parts.quality)
   
   
   
  







// · type – a string

// · model – a string

// · parts – an object that contains:

// o engine – number (quality of the engine)

// o power – number

// o quality – engine * power

// · fuel – a number

// · drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number