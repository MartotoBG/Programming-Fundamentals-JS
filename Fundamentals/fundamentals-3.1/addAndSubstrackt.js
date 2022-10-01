function plusOrMinus (numbers){
    let length = numbers.length;
    let result = [];
    let count = -1;
    let sum = 0;
    let resultSum = 0;
    let final = ``;

    for (let j = 0; j<length; j++){
        sum+= numbers[j];
    }
    for (let i = 0; i<length; i++){
        count++;
        if (numbers[i] % 2 === 0){
            numbers[i] += count;
            result = numbers;
        }
        else {
            numbers[i] -= count;
            result = numbers;
        }
    }

    for (let z = 0; z<length; z++){
    resultSum+= numbers[z];
    }

    for (let y = 0 ; y<length ; y++){
        final += result[y];
        if (y < length-1){
            final += `, `;
        }
        else {
            final += ` `;
        }
    }
    console.log(`[ ${final}]`);
    console.log(`${sum}`);
    console.log(`${resultSum}`)
}

plusOrMinus([5, 15, 23, 56, 35])