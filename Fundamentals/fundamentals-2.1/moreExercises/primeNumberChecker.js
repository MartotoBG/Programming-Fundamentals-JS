function solve (number){
    let isPrime = true;
    if (number % 2 === 0 && number != 2){
        isPrime = false;
    }
    else if (number % 3 === 0 && number != 3){
        isPrime = false;
    }
    else if (number % 5 === 0 && number != 5){
        isPrime = false;
    }
    else if (number % 7 === 0 && number != 7){
        isPrime = false;
    }

    if (isPrime){
        console.log("true");
    }
    else {
        console.log("false")
    }
}

solve (7)