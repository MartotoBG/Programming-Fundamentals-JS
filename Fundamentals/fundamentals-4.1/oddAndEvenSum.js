function sum (number){
    let numberAsString = number.toString();
    let length = numberAsString.length;
    let even = 0;
    let odd = 0;
    for (let i = 0; i <length; i++){
        if (numberAsString[i] % 2 === 0){

            even += Number(numberAsString[i]);
        }
        else {
            odd += Number(numberAsString[i]);
        }
    }
    
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}
sum (103440)