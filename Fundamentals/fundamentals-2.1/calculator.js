function sum (firstNumber , operator , secondNumber) {
    let sum = 0;
    switch (operator) {
        case "-" : sum = (firstNumber - secondNumber).toFixed(2); break;
        case "+" : sum = (firstNumber + secondNumber).toFixed(2); break;
        case "/" : sum = (firstNumber / secondNumber).toFixed(2); break;
        case "*" : sum = (firstNumber * secondNumber).toFixed(2); break;
    }
    console.log(sum);
}

sum (5, '+' ,10)