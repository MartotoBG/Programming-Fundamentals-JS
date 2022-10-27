function biscuit (array){
    let biscuitPerWorkerPerDay = array.shift();
    let workersOnTheFactory = array.shift();
    let otherProduction = array.shift(); // za 30 dni za konkurenciqta
    let production = 0;
    for (let i = 1 ; i<=30 ; i++){
        if (i % 3 == 0){
            production += Math.floor(biscuitPerWorkerPerDay*0.75 * workersOnTheFactory);
        }
        else {
            production += Math.floor(biscuitPerWorkerPerDay * workersOnTheFactory);
        }
    }
    console.log(`You have produced ${production} biscuits for the past month.`)
    let percentage = Math.floor(production) / otherProduction * 100;
    if(production >= otherProduction){
        percentage -=100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    }
    else{
        percentage -=100;
        percentage *= -1
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
    
}

biscuit (["78","8","16000"])