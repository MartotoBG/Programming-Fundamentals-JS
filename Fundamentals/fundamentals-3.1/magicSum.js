function magicSum (numbers, sum){
    let length = numbers.length;
   
    for (let i = 0 ; i < length ; i++){
        for (let j = i + 1; j < length ; j++){
            if (numbers[i] + numbers[j] === sum){
                console.log(`${numbers[i]} ${numbers[j]}`);
            }
        }
    }
}

magicSum ([2,2,2,4,4,4], 7)