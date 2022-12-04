function solve(input) {
    let typeProjection = (input[0]);
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let tickets = rows*columns;
    switch (typeProjection){
        case "Premiere" : console.log(`${(tickets*12).toFixed(2)} leva`); break;
        case "Normal" : console.log(`${(tickets*7.5).toFixed(2)} leva`); break;
        case "Discount" : console.log(`${(tickets*5).toFixed(2)} leva`); break;

    }

    
}