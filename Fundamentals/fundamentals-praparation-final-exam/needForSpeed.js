function speed (array){
    let numberOfCars = Number(array.shift());
    const carsObject = {};
    const max = 100000;
    const maxTank = 75;
    for (let i=0 ; i<numberOfCars; i++){
        let currentCar = array.shift().split('|');
        let name = currentCar.shift();
        let mileAge = Number(currentCar.shift());
        let fuel = Number(currentCar.shift());
        carsObject[name] = {
            mileAge: mileAge,
            fuel: fuel,
        }
    }

    let currentLine = array.shift().split(' : ');
    let command = currentLine.shift();
    while (command !== 'Stop'){
        switch (command){
            case 'Drive': {
                const name = currentLine.shift();
                const distance = Number(currentLine.shift());
                const needFuel = Number(currentLine.shift());
                if (carsObject[name].fuel>=needFuel){
                    carsObject[name].mileAge += distance;
                    carsObject[name].fuel -= needFuel;
                    console.log(`${name} driven for ${distance} kilometers. ${needFuel} liters of fuel consumed.`);
                }
                else {
                    console.log('Not enough fuel to make that ride')
                }
                if (carsObject[name].mileAge>=max){
                    console.log(`Time to sell the ${name}!`);
                    delete carsObject[name];
                }
                break;
            }
            case 'Refuel': {
                const name = currentLine.shift();
                const refuel = Number(currentLine.shift());
                if (carsObject[name].fuel+refuel >maxTank){
                    const difference = carsObject[name].fuel+refuel - maxTank;
                    carsObject[name].fuel = maxTank;
                    console.log(`${name} refueled with ${refuel-difference} liters`);
                }   
                else {
                    carsObject[name].fuel += refuel;
                    console.log(`${name} refueled with ${refuel} liters`);
                }
                break;
            }
            case 'Revert': {
                const name = currentLine.shift();
                const kilometers = Number(currentLine.shift());
                if (carsObject[name].mileAge-kilometers <10000){
                    carsObject[name].mileAge = 10000;
                }
                else {
                    carsObject[name].mileAge -= kilometers;
                    console.log(`${name} mileage decreased by ${kilometers} kilometers`);
                }
                break;
            }
        }
        currentLine = array.shift().split(' : ');
        command = currentLine.shift();
    }
    const entries = Object.entries(carsObject);
    for (const entry of entries){
        const currentCar = entry[0];
        const currentMileAge = entry[1].mileAge;
        const currentFuel = entry[1].fuel;
        console.log(`${currentCar} -> Mileage: ${currentMileAge} kms, Fuel in the tank: ${currentFuel} lt.`)
        
    }
}

speed ([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )