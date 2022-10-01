function max(numbers) {
    let length = numbers.length;
    let maxArray = [];
    let isBigger = true;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j <= length; j++) {
            if (numbers[i] <= numbers[j]) {
                isBigger = false;
                break;
            }
            else if (isBigger == true && j == length - 1) {
                maxArray += numbers[i] + ` `;
                break;
            }
            else if (isBigger == true && j == length) {
                maxArray += numbers[i];
            }
        }
        isBigger = true;
    }
    console.log(maxArray)
}

max ([41,41,34,20])