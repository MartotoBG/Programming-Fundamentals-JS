function notDecrease (array){
    let length = array.length;
    let result = [array[0]]+ ' ';
    for (let i = 1 ; i< length; i++){
        for (let j = i - 1 ; j < length ; j++){
            
            if (array[j] <= array[i]){
                result += array[i] + ' ';
                break;
            }
            else {
                break;
            }


        }
           
    }
    console.log(result);
}


notDecrease ([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);