function school (input){
    let pencil = Number(input[0]);
    let marker = Number(input[1]);
    let washingBottle = Number(input[2]);
    let percent = Number(input[3]);
    let allpencil = pencil*5.8;
    let allmarker = marker*7.2;
    let allwashingBottle = washingBottle*1.2;
    let total = allpencil + allmarker + allwashingBottle;
    let totalwithdiscount = total - (total*percent/100);
    console.log (totalwithdiscount)
}
school (["2","3","4","25"])