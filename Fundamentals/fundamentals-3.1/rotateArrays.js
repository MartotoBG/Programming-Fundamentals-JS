function rotate(array, rotations) {
    length = array.length;
    let moduledRotations = rotations % length;
    let rotatedSecondArray = [];
    let rotatedFirstArray = [];
    for (let i = 0 ; i < moduledRotations ; i++){
        if(i == moduledRotations-1){
            rotatedSecondArray += array[i];
        }
        else {
        rotatedSecondArray += array[i] + ` `;
        }
    }
    for (let j = moduledRotations ; j<length ; j++){
        rotatedFirstArray += array[j] + ` `;
    }
    
    console.log(rotatedFirstArray + rotatedSecondArray);
}

rotate([51, 47, 32, 61, 21], 2)