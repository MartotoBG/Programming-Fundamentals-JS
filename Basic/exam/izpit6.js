function solve(input) {
    let maxNumber1 = Number(input[0]);
    let maxNumber2 = Number(input[1]);
    let maxNumber3 = Number(input[2]);
    let finalNumber = ``;
    for (let a = 1; a <= maxNumber1; a++) {
        if (a % 2 === 0) {
            for (let b = 2; b <= maxNumber2; b++) {
                if (b === 2) {
                    for (let c = 1; c <= maxNumber3; c++) {
                        if (c % 2 === 0) {
                            console.log(`${a} ${b} ${c}`)
                        }
                    }

                }
                else if (b === 3) {
                    for (let c = 1; c <= maxNumber3; c++) {
                        if (c % 2 === 0) {
                            console.log(`${a} ${b} ${c}`)
                        }
                    }


                }
                else if (b === 5) {
                    for (let c = 1; c <= maxNumber3; c++) {
                        if (c % 2 === 0) {
                            console.log(`${a} ${b} ${c}`)
                        }
                    }


                }
                else if (b === 7) {
                    for (let c = 1; c <= maxNumber3; c++) {
                        if (c % 2 === 0) {
                            console.log(`${a} ${b} ${c}`)
                        }
                    }


                }
            }
        }


    }

}
solve(["3", "5", "5"])