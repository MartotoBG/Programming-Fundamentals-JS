function rotate (array){
    let length = array.length -1;
    let secondArray = [];
    let rotations = array[length] % length;
    let firstArray= [];

    for (let j = length - rotations ; j<length ; j++){
        firstArray += array[j] + " ";
    }
    //console.log(firstArray);


     for (let i = 0 ; i<length-rotations; i++){
          secondArray+= array[i] + " ";
     }
    //  console.log(secondArray);

    
    
     console.log(firstArray + secondArray)

     
}

rotate (['Banana', 'Orange', 'Coconut',

'Apple','Cucumber', '17'])