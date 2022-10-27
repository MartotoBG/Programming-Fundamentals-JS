function plunder(array) {
    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let target = Number(array[2]);
    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        if (i % 3 == 0 && i != 0 && i % 5 != 0) {
            totalPlunder += dailyPlunder * 1.5;
        }
        else if (i % 5 == 0 && i != 0 && i % 3 != 0) {
            totalPlunder += dailyPlunder;
            totalPlunder *= 0.7;
        }
        else if (i % 3 == 0 && i % 5 == 0){
            totalPlunder+=dailyPlunder *1.5;
            totalPlunder *= 0.7;
        }
        else {
            totalPlunder += dailyPlunder;
        }
    }
    if (totalPlunder >= target) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
    else {
        let percentage = totalPlunder / target * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }

}

plunder((["10", "20", "380"]))