function remove (array){
    let length = array.length;
    for (let i = 0 ; i < length ; i++){
        for (let j = i+1 ; j<length ; j++){
            if(array[i] == array [j]){
                array.splice(j,1);
                length --;
                for (let x = j ; x<length ; x++){
                    if(array[i] == array[x]){
                        array.splice(x,1);
                        length--;
                    }
                }
            
            }
        }
    }
    console.log(array.join(` `))
    
}


remove ([20, 8, 12, 13, 4,

    4, 8, 5])