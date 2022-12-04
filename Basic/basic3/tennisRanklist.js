function solve(input) {
    let tournaments = Number(input[0]);
    let start = Number(input[1]);
    let result1 = 0;
    let finalresult = 0;
    let p = 0;

    for (let i = 2; i < tournaments + 2; i++) {
        let result = input[i];
        if (result === "W") {
            result1 += 2000
            p += 1

        }
        else if (result === "F") {
            result1 += 1200;
        }
        else if (result === "SF") {
            result1 += 720;
        }


    }

    finalresult = result1 + start
    console.log(`Final points: ${finalresult}`);
    console.log(`Average points: ${Math.floor(result1 / tournaments)}`);
    console.log(`${((p / tournaments) * 100).toFixed(2)}%`)


}
solve([7, 1200, "SF", "F", "W", "F", "W", "SF", "W"])