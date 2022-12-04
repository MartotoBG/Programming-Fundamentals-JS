function solve(input) {
    let people = Number(input[0]);
    let season = input[1];
    let money = 0;
    if ( people <= 5){
        switch (season){
            case "spring" : money = 50 * people; break;
            case "summer" : money = (48.5*people)*0.85; break;
            case "autumn" : money = 60 * people; break;
            case "winter" : money = (86* people)* 1.08 ; break;
        }
    }
    else {
        switch (season){
            case "spring" : money = 48 * people; break;
            case "summer" : money = (45*people)*0.85; break;
            case "autumn" : money = 49.5 * people; break;
            case "winter" : money = (85* people)* 1.08 ; break;
        }
    }
    console.log(`${money.toFixed(2)} leva.`)
}
solve([10 , "summer"])