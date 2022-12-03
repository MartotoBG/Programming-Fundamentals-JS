function overAverage (string){
    let numbers = string.split(' ');
    let sum = 0;
    let count = 0;
    for (const number of numbers){
        sum+=Number(number);
        count++
    }
    let average = sum/count;
    let validNumbers = [];
    for (const number of numbers){
        if (number > average){
            validNumbers.push(number);
        }
    }
    validNumbers = validNumbers.sort((a,b) => b-a);
    if (validNumbers.length>0){
        validNumbers.splice(5);
        console.log(validNumbers.join(' '));
    }
    else {
        console.log('No')
    }
}

overAverage('5 2 3 4 -10 30 40 50 20 50 60 60 51')