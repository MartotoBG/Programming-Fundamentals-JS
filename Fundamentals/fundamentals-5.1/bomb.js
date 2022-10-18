function bomb(numbers, bombStatistics) {
    let length = numbers.length;
    let bomb = bombStatistics[0];
    let power = Math.max(bombStatistics[1],0);
    let result = [];
    // cikul v koito da namerq kude ima bomba
    // da premahna tova chislo kakto i susednite mu spored power-a na bombata
    // da izkaram nov masiv s ostanalite chisla
    // da subera chislata
    for (let i = 0; i < length; i++) {
        if (numbers[i] == bomb) { // tova e bomba
            let index = Math.max(i - power, 0); // zadavam nachaloto ot kude da premahva chisla
            numbers.splice(index, 2 * power + 1); // da hvane chislata otpred i otzad zatowa e 2 * power i +1 za da obhwane chisloto na bombata
            i=-1;
        }
    }
    let sum = 0;    
    length = numbers.length
    for (let j = 0; j < length; j++) {
        sum += numbers[j];
    }
    console.log(sum);
}

bomb(
    [1, 4, 4, 2, 8, 9, 1], [9, 3])