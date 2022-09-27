function binaryToDecimal (binary) {
    let binaryToString = binary.toString();
    let decimal = 0;
    let length = binaryToString.length;
    let one = 1;
    for (let i = length-1; i>=0 ; i--){
        if (binaryToString[i] == 0){
        }
        else {
            decimal+=one;
        }
        one *= 2;
    }
    console.log(decimal);
}

binaryToDecimal ("00001001")