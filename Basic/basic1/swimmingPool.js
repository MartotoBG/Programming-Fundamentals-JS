function solve(input) {
    let record = Number(input[0]);
    let meters = Number(input[1]);
    let timeFor1Meter = Number(input[2]);
    let voda = Math.floor(meters / 15) ;
    let slow = (voda * 12.5);
    let time = ((meters * timeFor1Meter) + slow)

    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
    else {
        console.log (`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`)
    }

}