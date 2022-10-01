function findMagicSum (numbers, sum){
    let length = numbers.length;
    let magic = [] + ``;
    for (let i = 0 ; i<length ; i++){
        for (let j = 0; j<length ; j++){
            
            if (numbers[i] + numbers[j] == sum){
                if (numbers[i] == numbers[j]){
                    break;
                }
                else {
                magic = numbers[i] + ` ` + numbers[j];
                console.log(magic);
                for (let z = 0;z<length;z++){
                    for (let y = 0; y <length; y++){
                        if (numbers[i] == numbers[z]){
                            numbers[z] += " a ";
                        }
                        else if (numbers[j] == numbers[y]){
                            numbers[y] += " a ";
                        }
                    }
                }
                }
            }
        }  
    }
}



findMagicSum ([-1,0,1,-2], -1);