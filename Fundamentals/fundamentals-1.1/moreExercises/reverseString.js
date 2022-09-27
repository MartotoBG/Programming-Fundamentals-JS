function reverse (string){
    let reverseToString = string.toString();
    let length = reverseToString.length;
    let row = ``
    for (let i = length - 1; i>=0 ; i--){
        let letter = reverseToString[i];
        row += letter;
    }
    console.log(row)
}

reverse(1234)