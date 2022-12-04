function solve(input) {
    let n = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i])
        
        if (currentNum < 200) {
            group1 += 1
        }
        else if (currentNum < 400) {
            group2 += 1
        }
        else if (currentNum < 600) {
            group3 += 1
        }
        else if (currentNum < 800) {
            group4 += 1
        }
        else if (currentNum >= 800) {
            group5 += 1
        }
    }
    let p1 = group1 / n * 100;
    let p2 = group2 / n * 100;
    let p3 = group3 / n * 100;
    let p4 = group4 / n * 100;
    let p5 = group5 / n * 100;
    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
    console.log(`${p4.toFixed(2)}%`)
    console.log(`${p5.toFixed(2)}%`)

}


solve(["3", "1", "2", "999"])