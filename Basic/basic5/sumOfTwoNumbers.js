function solve (input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let number = Number(input[2]);
    let count= 0;
    let foundIt = false
    let count2=0;
    
    for (let i = start; i <= end ; i++){
        for (let a = start; a<=end; a++){
            count++
            if (i + a === number){
                foundIt= true
                console.log(`Combination N:${count} (${i} + ${a} = ${number})`)
                return;
            }
            if (foundIt===true){
                break;
            }
    }
    count2++;
}
    if (foundIt=== false){
        console.log(`${count} combinations - neither equals ${number}`)
        
    }
}

solve(["23",

"24",

"20"])