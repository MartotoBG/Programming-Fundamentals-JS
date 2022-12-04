function solve(input) {
    let budget= Number(input[0]);
    let video = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);
    let videoPrice = 250;
    let cpuPrice = video * videoPrice * 0.35;
    let ramPrice = video * videoPrice * 0.1;
    let total = (video * videoPrice) + (cpu * cpuPrice) + (ram * ramPrice);
    if (video > cpu) {
        total = total * 0.85
    }
    if ( budget >= total) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    }
    else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`)
    }
    

}

solve (["920.45","3","1","1"])