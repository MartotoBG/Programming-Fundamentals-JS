function findTheSmallestNumbers (array){
    // converting array to numbers;
    // find the two smallest numbers;
    // log in to the console
    let length = array.length;
    let smallestNumber = array[0];
    
    for (let i = 1 ; i < length ; i++){
        if (array[i]<smallestNumber){
            smallestNumber = array[i];
        }
    }
    let filterredArray = array.filter(num => num<=smallestNumber);
    
    let arrayWithoutSmallestNumber = array.filter(num => num>smallestNumber);
    let lengthFilterredArray = filterredArray.length
    if (filterredArray.length>1){
        for (let i = 1 ; i < lengthFilterredArray ; i++){
            filterredArray.pop();
        }
    }

    let lengthOfTheArrayWithoutSmallestNumber = arrayWithoutSmallestNumber.length;

    smallestNumber = arrayWithoutSmallestNumber[0];

    for (let i = 1 ; i < lengthOfTheArrayWithoutSmallestNumber ; i++){
        if (arrayWithoutSmallestNumber[i]<smallestNumber){
            smallestNumber = array[i];
        }
    }

    filterredArray.push(smallestNumber);
    console.log(filterredArray.join(` `))
    
}

findTheSmallestNumbers([-1, 18, 9999 , 0 , -1, -1 , 0 , 0 , -5 , -5]);