function process (numbers){
    //get numbers on odd positions - done
    // double it
    // reverse it
    let length = numbers.length;
    let result = [];
    for (let i = 1 ; i<length ; i = i+2){
        result.push(numbers[i]); //get numbers
    }
    
    for (let j = 0; j< result.length ; j++){
        result[j] *= 2; //double
    }
    result.reverse();
    console.log(result.join(` `))
}

process([10, 15, 20, 25])