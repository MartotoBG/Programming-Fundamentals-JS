function solve(input) {
 
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);
 
    let earlyhour = 0;
    let earlyMin = 0;
    let lateHour = 0;
    let lateMin = 0;
 
    let totalExamMin = (examHour * 60) + examMin;
    let totalArriveMin = (arriveHour * 60) + arriveMin;
 
    let difference = totalExamMin - totalArriveMin;
 
    if (difference === 0) {
        console.log("On time")
    }
    else if (difference >= 0 && difference <= 30) {             //on Time
        earlyMin = difference % 60;
 
        console.log("On time")
        console.log(`${earlyMin} minutes before the start`)
    }
    else if (difference > 30 && difference < 60) {        //Early
        earlyMin = difference % 60
 
        console.log("Early")
        console.log(`${earlyMin} minutes before the start`)
    }
    else if (difference >= 60) {
        earlyMin = difference % 60;
        earlyhour = Math.trunc(difference / 60);
 
        if (earlyMin === 0 || earlyMin < 10) {
 
            console.log("Early");
            console.log(`${earlyhour}:0${earlyMin} hours before the start`)
        } else {
            console.log("Early");
            console.log(`${earlyhour}:${earlyMin} hours before the start`)
        }
    }
    if (difference < 0 && difference > -60) {
        difference = Math.abs(difference);
        lateMin = difference % 60;
 
        console.log("Late")
        console.log(`${lateMin} minutes after the start`)
 
    } else {
        difference = Math.abs(difference);
        lateMin = difference % 60;
        lateHour = Math.trunc(difference / 60);
 
        if (lateHour === 0 || lateMin < 10) {
 
            console.log("Late");
            console.log(`${lateHour}:0${lateMin} hours after the start`)
        } else {
 
            console.log("Late")
            console.log(`${lateHour}:${lateMin} hours after the start`)
 
        }
    }
}