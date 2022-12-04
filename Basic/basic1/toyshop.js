function solve(input) {
    let travel = Number(input[0]);
    let puzzle = Number(input[1]);
    let barbie = Number(input[2]);
    let bear = Number(input[3]);
    let miner = Number(input[4]);
    let truck = Number(input[5]);
    let total = puzzle*2.6 + barbie*3 + bear*4.1 + miner*8.2 + truck*2
    let toys = puzzle + barbie + bear + miner + truck

    if (toys >=50){
        let discount = total * 0.25;
        total = total - discount;
    }
    let rent = 0.1 * total;
    total = total - rent;

    if (total >= travel) {
        console.log(`Yes! ${(total - travel).toFixed(2)} lv left.`);
    }
    else {
        console.log (`Not enough money! ${(travel - total).toFixed(2)} lv needed.`)
    }

}

solve (["4000.8",

"20",

"25",

"30",

"50",

"10"])