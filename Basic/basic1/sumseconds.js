function solve (input){
    let competitor1 = Number(input[0]);
    let competitor2 = Number(input[1]);
    let competitor3 = Number(input[2]);
    let total = competitor1 + competitor2 + competitor3;
    let minutes = Math.floor(total/60);
    let seconds = total % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }

}

solve ([33, 40, 50])