function print (array){
    let k = array.shift();
    let length = array.length;
    let firstElements = [];
    let secondElements= [];
    for (let i = 0 ; i<k ; i++){
        firstElements.push(array[i]);
    }
   
    for (let j = length-1; j>=length-k; j--){
        secondElements.unshift(array[j]);
    }
    
    console.log(firstElements.join(` `));
    console.log(secondElements.join(` `));
}

print ([2,

     7,8,9])