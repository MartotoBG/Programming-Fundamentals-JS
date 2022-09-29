function equalArrays (firstArray, secondArray){
    let firstSum = 0;
    let secondSum = 0;
    let areEqual = true;
    let index = 0;
    if (firstArray.length != secondArray.length){
        areEqual = false;
    }
    for (let i = 0; i<firstArray.length; i++){
        firstArray[i] = Number(firstArray[i]); 
        firstSum += firstArray[i];
    }
    for (let i = 0; i<secondArray.length; i++){
        secondArray[i] = Number(secondArray[i]); 
        secondSum += secondArray[i];
    }

    for (let i = 0; i<firstArray.length; i++){
        if (firstArray[i] != secondArray[i]){
            areEqual = false;
            index = i;
            break;
        }
    }
    if (areEqual){
        console.log(`Arrays are identical. Sum: ${firstSum}`);
    }
    else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }

    
}

equalArrays([1,2,3,4,5],[1])