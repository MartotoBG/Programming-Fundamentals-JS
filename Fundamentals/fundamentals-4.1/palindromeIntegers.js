function palindrome (numbers){
    let length = numbers.length
    for (let i =0 ; i<length ; i++){

        let numberAsString = numbers[i].toString();
        let reversedString = ``;

        for (let j = numberAsString.length -1 ; j>=0; j--){
            reversedString += numberAsString[j];
        }
        if (numberAsString == reversedString){
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
    
}

palindrome([323,233,434,333,122])