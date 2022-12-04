function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let text = ``;
    
    for (let currentNum = num1; currentNum <= num2; currentNum++) {

        let currentNumasString = currentNum.toString();

        let even = 0;

        let odd = 0;

        for (let index = 0; index < currentNumasString.length; index++) {

            let currentDigit = Number(currentNumasString[index]);
            

            let position = index+1;

            if (position % 2 === 0) {
                even += currentDigit;
            }
            else {
                odd += currentDigit;
            }
            
        }
        if (even === odd){
            text += `${currentNumasString} `;
        }
    }
    
    console.log(text)
}




solve(["100000",

    "100050"])