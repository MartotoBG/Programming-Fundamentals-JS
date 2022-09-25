function solve (year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 200 === 0){
        console.log("yes")
    }
    else {
        console.log("no")
    }
}


solve (1400)