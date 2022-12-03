function lift (array){
    let people = Number(array.shift());
    let lift = array.shift().split(' ');
    let max = 4;
    let newLift = [];
    let sum = 0;
    for (let place of lift){
        place = Number(place)
        for (let i = place; i<max; i++){
            if (people == 0){
                
            }
            else {
            people -= 1;
            place += 1;
            }
            
        }
        newLift.push(place)
    }
    for (let i = 0; i<newLift.length; i++){
        sum += Number(newLift[i]);
    }
    if (people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(newLift.join(' '));
    }
    else if (sum / (4 * newLift.length) == 1 && people == 0){
        console.log(newLift.join(' '));
    }
    else {
        console.log('The lift has empty spots!');
        console.log(newLift.join(' '));
    }

}

lift ([
    "21",
    "0 0 0 0 0"
   ]
   )