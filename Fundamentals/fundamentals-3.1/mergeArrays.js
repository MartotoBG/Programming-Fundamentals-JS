function merge(firstArray, secondArray) {
    firstLength = firstArray.length;
    secondLength = secondArray.length;
    let sum = '';
    let done = false;
    for (let i = 0; i < firstLength; i++) {
        if (i == firstLength - 1 && i % 2 == 0) {
            sum += Number(firstArray[i]) + Number(secondArray[i]);
            break;
        }
        else if (i == firstLength - 1 && i % 2 == 1) {
            sum += firstArray[i] + secondArray[i];
            break;
        }
        for (let j = 0; j < secondLength; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                firstArray[i] = Number(firstArray[i]);
                secondArray[i] = Number(secondArray[i]);
                sum += firstArray[i] + secondArray[i] + ` - `;
                done = true;
                break;
            }
            else if (i % 2 === 1 && j % 2 === 1) {
                sum += (firstArray[i] + secondArray[i] + ` - `);
                done = true;
                break;
            }

        }

    }
    console.log(sum);
}


merge(

    ['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11']

)