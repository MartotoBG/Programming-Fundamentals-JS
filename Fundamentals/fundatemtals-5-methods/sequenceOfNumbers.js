function solve (n,k){
    // n - length
    // k - numbers to be summed
    // creating an array to get new numbers
    // creating a loop where we get the numbers
    // creating a loop where the getted numbers are going to be summed
    // the sum is goint to the array
    let result = [1];
    for (let i = 1 ; i<n ; i++){
        let index = Math.max(result.length - k , 0);
        let lastElements = result.slice(index);
        let sum = 0;
        for (let elements of lastElements){
            sum += elements;
        }
        result.push(sum);
    }
    console.log(result.join(` `))
}

solve (6,3);