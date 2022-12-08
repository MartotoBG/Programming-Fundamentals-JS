function vacation(array) {
    let days = Number(array.shift());
    let budget = Number(array.shift());
    let people = Number(array.shift());
    let pricePerKilometerForFuel = Number(array.shift());
    let foodPerPersonForDay = Number(array.shift());
    let priceForNightForPerson = Number(array.shift());
    let expenses = 0;
    if (people > 10) {
        expenses += (priceForNightForPerson * people * days) * 0.75;
    }
    else {
        expenses += (priceForNightForPerson * days *people);
    }
    expenses += days * foodPerPersonForDay * people;
    for (let i = 1; i < array.length + 1; i++) {
        expenses += pricePerKilometerForFuel * Number(array[i-1]);
        if (i % 3 == 0 || i % 5 == 0) {
            expenses += expenses * 0.4;
        }
        if (i % 7 == 0) {
            let add = expenses / people;
            expenses -= add;
        }
        if (expenses > budget) {
            return console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`)
        }
    }
    if (budget>= expenses){
        console.log(`You have reached the destination. You have ${(budget - expenses).toFixed(2)}$ budget left.`);
    }
    else {
        console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`);
    }

}

vacation(["10",
"20500",
"11",
"1.2",
"8",
"13",
"100",
"150",
"500",
"400",
"600",
"130",
"300",
"350",
"200",
"300"])
