function solve (input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let lendth = Number(input[index]);
    index++;
    let heigth = Number(input[index]);
    index++;
    let S = width * lendth * heigth;
    let box = 0;
    while(input[index] !== "Done"){
        box += Number(input[index]);
        if (S<=box || index==input.length-1){
            console.log(`No more free space! You need ${box-S} Cubic meters more.`)
        return;
        }
        index++;
        ;
    }
        console.log(`${S-box} Cubic meters left.`)
}