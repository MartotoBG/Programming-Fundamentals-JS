function biggest (firstNumber,secondNumber,thirdNumber){
    if (firstNumber>secondNumber && firstNumber > thirdNumber){
        console.log(firstNumber);
    }
    else if (secondNumber>firstNumber && secondNumber > thirdNumber){
        console.log(secondNumber);
    }
    else {
        console.log(thirdNumber);
    }
}

biggest (-2,7,3)