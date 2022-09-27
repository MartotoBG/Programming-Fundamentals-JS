function solve (number) {
    // 2 3 6 7 10
    let divisible = 0;
    let boolean = true;
    if (number % 10 === 0) {
        divisible = 10;
    }
    else if (number % 7 === 0) {
        divisible = 7;
    }
    else if (number % 6 === 0) {
        divisible = 6;
    }
    else if (number % 3 === 0) {
        divisible = 3;
    }
    else if (number % 2 === 0) {
        divisible = 2;
    }
    else {
        console.log("Not divisible")
        boolean= false;
    }
    if (boolean){
    console.log(`The number is divisible by ${divisible}`)
    }
}

solve (1483)