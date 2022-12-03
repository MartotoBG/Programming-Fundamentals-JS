function fancy (array){
    const pattern = /(?<symbol>@{1}#+)(?<word>[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})@{1}#+/g;
    const numberOfBarcodes = Number(array.shift());
    
    const numberPattern = /\d/g;
    
    for (let i = 0; i<numberOfBarcodes; i++){
        let currentMatch = pattern.exec(array[i]);
        if (currentMatch){
        let currentWord = currentMatch[2];
        let currentDigits = currentWord.match(numberPattern);
        let concatenation = '';
        if (currentDigits){
            for (const digit of currentDigits){
                concatenation+=digit;
            }
            
        }
        else {
            concatenation = '00'
        }
        console.log(`Product group: ${concatenation}`);
        }
        else {
            console.log('Invalid barcode');
        }
        currentMatch = pattern.exec(array[i]);
    
}
}

fancy((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
)