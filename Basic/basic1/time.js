function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
   
   
    let total = num1 * 60 + num2 + 15;
    let minutes = total % 60;
    let hour = Math.floor(total/60);
    
    
    if (minutes < 10 && hour<24){
        console.log (`${hour}:0${minutes}`);
    }
    else if (hour<24) {
        
        console.log (`${hour}:${minutes}`);
    }
    if (hour>=24 && minutes <10) {
        hours = hour - 24
        console.log (`${hours}:0${minutes}`);
    }
    else if (hour>=24) {
        hours = hour - 24
        console.log (`${hours}:${minutes}`);
    }

    


}

solve([23,59])