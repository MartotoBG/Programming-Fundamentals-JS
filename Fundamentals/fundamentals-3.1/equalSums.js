function leftAndRightSums (numbers){
    let length = numbers.length;
    let sum = 0;
    let startSum= 0;
    let findMiddle = false;
    let count = 1;

    for (let z = 0 ; z <length ; z ++){
        startSum += numbers[z];
    }

    for (let i = 0; i<length-1 ; i++){
        
        sum += numbers[i];
        startSum -= sum;
        if (startSum - numbers[i+1] == sum){
            console.log(count);
            findMiddle= true;
            return;
        }
        startSum += sum;
        count++;
        
    }
    if (findMiddle == false && length > 1){
        console.log(`no`);
    }
    else {
        console.log(0);
    }
}

leftAndRightSums ([10,5,5,99,3,4,2,5,1,1,4]);