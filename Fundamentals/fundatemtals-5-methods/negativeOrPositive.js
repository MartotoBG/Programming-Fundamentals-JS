function negativeOrPositive (number){
    let result = [];
    let length = number.length;
    for (let i = 0; i<length; i++){
        if (Number(number[i])>=0){
            result.push(number[i]);
        }
        else {
            result.unshift(number[i]);
        }
    }
    let lenghtOfTheResult = result.length;
    for (let j = 0; j < lenghtOfTheResult; j++){
        console.log(result[j]);
    }
}

negativeOrPositive(['7', '-2', '8', '9'])