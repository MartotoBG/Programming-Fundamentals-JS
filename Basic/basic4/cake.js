function solve (input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    let pieces = width*length;
    let pieces2 = width*length;
    let cut = 0;
    index++;
    while (input[index] !== "STOP"){
        cut += Number(input[index]);
        pieces -= cut;
        
        if (cut>=pieces2 || index==input.length-1){
            console.log(`No more cake left! You need ${cut - pieces2} pieces more.`)
        return;
        }
        index++;
    }
    if(pieces2<=cut){
        console.log(`No more cake left! You need ${cut - pieces2} pieces more.`)
    
    }
    else {
    console.log (`${pieces2 - cut} pieces are left.`);
    }
}