function sum (number){
    number = number.toString()
    let sum = 0;
    for (let i = 0 ; i<number.length; i++){
        
        sum += Number(number.charAt(i))
       
    }
    console.log(sum)
}

sum (155)