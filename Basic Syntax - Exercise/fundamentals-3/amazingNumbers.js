function amazingNumber (num){
    let number = num.toString();
    let sum = 0;
    for (let i = 0 ; i < number.length ; i++){
        
        sum += Number(number[i]);
        
    }
    if (sum.toString().includes(9)){
        console.log(`${num} Amazing? True`)
    }
    else {
        console.log(`${num} Amazing? False`)
    }
   
}

amazingNumber (1233)