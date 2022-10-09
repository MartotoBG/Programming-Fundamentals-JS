function matrix (number){
    let row = "";
    


    for (let i = 0; i<number; i++){
        if (number-1 == i){
        row += number
        }
        else {
            row+= number + " ";
        }
    }
    for (let j = 0 ; j<number; j++){
        console.log(row);
    }
}

matrix(3)