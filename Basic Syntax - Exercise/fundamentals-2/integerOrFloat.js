function integerOrFloat (firstNumber , secondNumber , thirdNumber){
    let sum = firstNumber + secondNumber + thirdNumber
    if ( sum % 1 === 0) {
        console.log(`${sum} - Integer`)
    }
    else {
        console.log(`${sum} - Float`)
    }
}

integerOrFloat (100 , 200 , 303)