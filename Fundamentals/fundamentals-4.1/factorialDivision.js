function facotrialDivision (firstNumber,secondNumber){
    let firstSum = 1;
    let secondSum = 1;

    for(let i = 1; i<=firstNumber; i++){
        firstSum *= i;
    }
    for (let j = 1; j<=secondNumber; j++){
        secondSum *= j;
    }

    console.log((firstSum/secondSum).toFixed(2))
}

facotrialDivision(5,2)