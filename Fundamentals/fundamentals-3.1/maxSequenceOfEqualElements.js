function maxSequence (numbers){
    let length = numbers.length;
    let longestArray = [];
    let zero = 0;
    let count = 1;
    let result = [];
    for (let i = 0; i< length ; i++){
        longestArray = numbers[i] + ` `;
        while (numbers[i] == numbers[i+1]){
            if (numbers[i+1] == numbers[i+2]){
            longestArray += numbers[i+1] + ` `;
            }
            else {
            longestArray += numbers[i+1];
            }
            i++
            count++
        }
        if (count > zero){
            zero = count;
            result = longestArray;
        }
        else {
            
            longestArray = [];
        }
        count = 1;
    }
    console.log(result);
}

maxSequence ([2, 2, 2, 1])