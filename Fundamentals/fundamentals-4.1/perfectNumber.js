function isPerfect(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }

    if (sum == number && number>=0){
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }


    //     If the number is perfect, print: "We have a perfect number!"

    // · Otherwise, print: "It's not so perfect."
}

isPerfect(1236498)