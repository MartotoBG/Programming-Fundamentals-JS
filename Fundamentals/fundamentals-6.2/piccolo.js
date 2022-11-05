function piccolo (array){
    const parking = {};
    array.forEach(car => {
        const [direction,carNumber] = car.split(`, `)
        if(direction == "IN"){
            parking[carNumber] = carNumber;
        }
        else {
            delete parking[carNumber];
        }
    });
    const entries = Object.values(parking).sort((a,b) => a.localeCompare(b));
    if (entries.length == 0){
        console.log(`Parking Lot is Empty`);
    }
    else {
    for (const entry of entries){
        console.log(entry)
    }
}
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])