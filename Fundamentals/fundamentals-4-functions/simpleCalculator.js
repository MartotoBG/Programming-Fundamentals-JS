function judge (firstNumber,secondNumber,operator){
let multiply = (firstNumber,secondNumber) =>  {
         let operation = firstNumber * secondNumber;
         return operation;
     }
let divide = (firstNumber,secondNumber) => {
    let operation = firstNumber / secondNumber;
    return operation;
}
let add = (firstNumber,secondNumber) => {
    let operation = firstNumber + secondNumber;
    return operation;
}
let substract = (firstNumber,secondNumber) => {
    let operation = firstNumber - secondNumber;
    return operation;
}


function findOperator (firstNumber,secondNumber,operator){
    let result = 0;
    switch (operator) {
        case "multiply" : result = multiply(firstNumber,secondNumber); break;
        case "divide" : result = divide(firstNumber,secondNumber); break;
        case "add" :    result = add(firstNumber,secondNumber); break;
        case "subtract" :  result = substract(firstNumber,secondNumber); break;
    }
    return result
}
    console.log(findOperator(firstNumber,secondNumber,operator))
}




// let multiply = (firstNumber,secondNumber) =>  {
//     let operation = firstNumber * secondNumber;
//     return operation;
// }


judge(50,13,"subtract")

