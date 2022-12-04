function solve(input) {
    let number = Number(input[0]);
    let number2 = `1110`;
    let buff = ``;
    
    while (number2 < 10000) {
        number2++;
        number2 = number2.toString();
        let firstNumber = number2.charAt(0);
    let secondNumber = number2.charAt(1);
    let thirdNumber = number2.charAt(2);
    let fourthNumber = number2.charAt(3);
        
        if (number % firstNumber == 0 && number % secondNumber == 0 && number % thirdNumber == 0 && number % fourthNumber == 0) {
            buff += `${number2} `;
            
        }
        


    }
    console.log(buff)

}