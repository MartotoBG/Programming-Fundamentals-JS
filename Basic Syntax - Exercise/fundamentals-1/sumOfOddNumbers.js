function solve (number){
    let num = 1;
    let finalSum = 0;
    while (number>0){
        finalSum+=num
        console.log(num)
        number--
        num+=2
        
    }
    console.log(`Sum: ${finalSum}`)
}

solve(5)