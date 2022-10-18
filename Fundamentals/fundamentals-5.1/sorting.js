function sort(array) {
    //da otdelq malkite elementi ot golemite
    //da sortiram malkite v otdelen masiv kakto i golemite
    // da suedinq dwata masiva kato reduvam golqmo malko chislo
    let length = array.length;
    let smallNumbers = [];
    let bigNumbers = [];
    let result = [];
    array.sort((a, b) => b - a);
    if (length % 2 == 0) {
        for (let i = 0; i < length / 2; i++) {
            bigNumbers.push(array[i]);
        }
        for (let i = length / 2; i < length; i++) {
            smallNumbers.push(array[i]);
        }

    }
    else {
        for (let i = 0; i < length / 2; i++) {
            bigNumbers.push(array[i]);
        }
        for (let i = Math.ceil(length / 2); i < length; i++) {
            smallNumbers.push(array[i]);
        }
    }
    smallNumbers.sort((a, b) => a - b);
    for (let j = 0; j < length; j++) {
        if (j % 2 == 0) {
            result.push(bigNumbers[Math.floor(j / 2)]);
        }
        else {
            result.push(smallNumbers[Math.floor(j / 2)]);
        }
    }
    console.log(result.join(` `));
    // console.log(smallNumbers);
    // console.log(bigNumbers);
    // console.log(array);
}

sort([34, 2, 32, 45, 690, 6, 32,

    7, 19, 47])
