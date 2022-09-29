function condense (numbers){
    // syberi otdelnite elementi
    let length = numbers.length;
    let sum = 0;
    if (length == 1){
        console.log(numbers[0]);
        return;
    }
    for (let z = 0; z<length-1; z++){

        for (let i = 0; i<length-1 ; i++){
        

        for (let j = 0; j <length-1-i; j++){

            sum+= numbers[j] + numbers[j+1]
        }
        length--;
    }
    

  }
  console.log(sum)
  }
condense([-2,-10,-3])