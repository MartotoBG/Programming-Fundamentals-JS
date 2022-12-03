function reception (array){
    let first = Number(array.shift());
    let second = Number(array.shift());
    let third = Number(array.shift());
    let students = Number(array.shift());
    let time = 0;
    while (students>0){
        time ++;
        if (time % 4 == 0 && time!==0){
            
        }
        else {
            students -= first + second + third;
            
        }
    }
    console.log(`Time needed: ${time}h.`)
}

reception (['3','2','5','40'])