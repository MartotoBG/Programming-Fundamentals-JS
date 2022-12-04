function solve(input) {
    let moneyPerDay = Number(input[0]);
    let profitPerDay = Number(input[1]);
    let spendings = Number(input[2]);
    let gift = Number(input[3]);
    let moneyPerDay1 = moneyPerDay * 5;
    let profitPerDay1 = profitPerDay * 5;
    let money = moneyPerDay1 + profitPerDay1 - spendings
    if ( money >= gift){
        console.log(`Profit: ${money.toFixed(2)} BGN, the gift has been purchased.`);
    }
    else {
        console.log(`Insufficient money: ${(gift - money).toFixed(2)} BGN.`)
    }
}   
solve([2.1 , 17.5 , 20.2 , 148.5])