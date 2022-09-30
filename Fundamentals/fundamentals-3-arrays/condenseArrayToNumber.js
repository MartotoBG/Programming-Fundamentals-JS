function condense (numbers){
    let condensed = [];
    if (numbers.length>1){
        while (numbers.length > 1){
            for (let i = 0 ; i <= numbers.length - 2 ; i++){
                condensed[i] = numbers[i] + numbers[i+1];
            }
            if (condensed.length > 1){
                numbers = condensed;
                condensed = [];
            }
            else {
                numbers = condensed;
                console.log(`${numbers}`);
                
                
            }
        }
    }
    else {
        console.log(`${numbers}`)
    }

  }
condense([2,-10,3])