function solve(input) {
    let human = Number(input[0]);
    let tax = Number(input[1]);
    let shezlong = Number(input[2]);
    let umbrella = Number(input[3]);
    let umbrellaPrice = umbrella * Math.ceil(human/2);
    let shezlongPrice = shezlong * Math.ceil(human *0.75);
    let all = tax * human + umbrellaPrice + shezlongPrice;
    console.log(`${all.toFixed(2)} lv.`);


}
solve(["21","5.50","4.40", "6.20"])