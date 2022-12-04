function solve(input) {
    let budget = Number(input[0]);
    let season = (input[1]);
    let fishermans = Number(input[2]);
    let price = 0
    let discount = 0
    switch (season) {
        case "Spring": price = 3000; break;
        case "Summer": price = 4200; break;
        case "Autumn": price = 4200; break;
        case "Winter": price = 2600; break;

    }
    if (fishermans <= 6) {
         discount = price * 0.9;
    }
    else if (fishermans >= 7 && fishermans <= 11) {
        discount = price * 0.85;
    }
    else if (fishermans > 12) {
        discount = price * 0.75;
    }
    if (fishermans % 2 === 0 && season != "Autumn"){
        discount = discount * 0.95
    }
    if (budget>= discount) {
        console.log(`Yes! You have ${(budget - discount).toFixed(2)} leva left.`);
    }
    if (budget<discount) {
        console.log(`Not enough money! You need ${(discount - budget).toFixed(2)} leva.`)
    }
}