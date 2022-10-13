function modification (number){
    let numberAsString = number.toString();
    let length = numberAsString.length;
    let average = 0;
    for (let j=0; j<length; j++){
        average+=Number(numberAsString[j]);
    }
    average = average/length;

    while (average<5){
        for(let i = 0; i<length ; i++){
            average+= Number(numberAsString[i]);
        }
        numberAsString+= "9";
        average = average/length;
        length++;
    }
    console.log(numberAsString);
}

modification(101)