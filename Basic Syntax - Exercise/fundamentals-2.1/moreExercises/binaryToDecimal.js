function binaryToDecimal (binary) {
    let binaryToString = binary.toString();
    let decimal = 0;
    if (binaryToString[7] == 1){
        decimal+=1;
    }
    else {
        decimal+=0
    }
   
    decimal = binaryToString[6] ==1 ? decimal +=2 : decimal+=0;

    decimal = binaryToString[5] ==1 ? decimal +=4 : decimal+=0;

    decimal = binaryToString[4] ==1 ? decimal +=8 : decimal+=0;

    decimal = binaryToString[3] ==1 ? decimal +=16 : decimal+=0;

    decimal = binaryToString[2] ==1 ? decimal +=32 : decimal+=0;

    decimal = binaryToString[1] ==1 ? decimal +=64 : decimal+=0;

     decimal = binaryToString[0] ==1 ? decimal +=128 : decimal+=0;

    console.log(decimal)
}

binaryToDecimal ("00010101")