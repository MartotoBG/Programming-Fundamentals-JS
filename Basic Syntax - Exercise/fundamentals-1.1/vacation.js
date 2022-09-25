function solve(people, group, day) {
    let price = 0;
    switch (day) {
        case "Friday": 
            if (group === "Students") {
            price = people * 8.45
            if (people >= 30) {
                price *= 0.85;
            }
        }
        else if (group === "Business") {
            if (people >= 100) {
                people -= 10
            }
            price = people * 10.90;
        }
        else if (group === "Regular") {
            price = people * 15
            if (people >= 10 && people <= 20) {
                price *= 0.95;
            }
        } break;
        case "Saturday": 
        if (group === "Students") {
            price = people * 9.8
            if (people >= 30) {
                price *= 0.85;
            }
        }
        else if (group === "Business") {
            if (people >= 100) {
                people -= 10
            }
            price = people * 15.60;
        }
        else if (group === "Regular") {
            price = people * 20
            if (people >= 10 && people <= 20) {
                price *= 0.95;
            }
        } break;
        case "Sunday": 
        if (group === "Students") {
            price = people * 10.46
            if (people >= 30) {
                price *= 0.85;
            }
        }
        else if (group === "Business") {
            if (people >= 100) {
                people -= 10
            }
            price = people * 16;
        }
        else if (group === "Regular") {
            price = people * 22.50
            if (people >= 10 && people <= 20) {
                price *= 0.95;
            }
        } break;
    }
        console.log(`Total price: ${price.toFixed(2)}`);

}

solve (40,

    "Regular",
    
    "Saturday")