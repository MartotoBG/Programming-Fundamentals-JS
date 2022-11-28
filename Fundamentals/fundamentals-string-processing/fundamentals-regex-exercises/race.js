function race (array){
    const racers = array.shift().split(', ');
    const patternName = /[A-Za-z]+/g;
    const patternDistance = /[0-9]+/g;
    const racerObject = {};
    let currentRacer = array.shift();
    let sum = 0;
    
   
    while (currentRacer !== 'end of race'){
        let currentName = currentRacer.match(patternName).join('');
        let currentDistance = currentRacer.match(patternDistance).join('').split('');
        for (km of currentDistance){
            sum += Number(km)
        }
       
       if (racers.includes(currentName)){
        if (racerObject[currentName]){
            racerObject[currentName] += sum;
        }
        else {
        racerObject[currentName] = sum;
        }
       }
       // console.log(racerObject)
        currentRacer = array.shift();
        sum = 0;
       
    }
    const sortedRacers = Object.entries(racerObject).sort((a,b)=> b[1] - a[1]);
    let count = 0;
    for (const sortedRacer of sortedRacers){
        if (count == 0){
            console.log(`1st place: ${sortedRacer[0]}`);
        }
        else if (count == 1){
            console.log(`2nd place: ${sortedRacer[0]}`);
        }
        else if (count == 2){
            console.log(`3rd place: ${sortedRacer[0]}`);
        }
        count ++
    }
    //"1st place: {first racer}

    //2nd place: {second racer}

    //3rd place: {third racer}"
}

race (['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])