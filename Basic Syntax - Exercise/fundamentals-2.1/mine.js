function mining (yield) {
    let days = 0;
    let workers = 26;
    let firstDay = 0;
    if (yield<100){
        firstDay = yield;
    }
    else {
         firstDay = yield - workers;
    }
    let otherDays = 0;
    let spice = yield;
    
    for (yield ; yield >= 100 ; yield-=10){
        days++
        otherDays +=yield - workers;
        
    }
    
    let result = firstDay + otherDays - spice;
    
    console.log(days);
    console.log(result);
    }
    // yield - workers = purvi den
    // yield - 10 - workers = vtori den

    





    // Write a program that calculates the total amount of spice that can be extracted from a source. 
    // The source has a starting yield, which indicates how much spice can be mined on the first day. 
    // After it has been mined for a day, the yield drops by 10, meaning on the second day it’ll produce 10 less spice than on the first, 
    //on the third day 10 less than on the second, and so on (see examples). A source is considered profitable only while its yield is at least 100 – 
    //when less than 100 spices are expected in a day, abandon the source.

    // The mining crew consumes 26 spices every day at the end of their shift and an additional 26 after the mine has been exhausted. 
    //Note that the workers cannot consume more spice than there is in storage.
    
    // When the operation is complete, print on the console on two separate lines how many days the mine has operated and the total amount of spice extracted.


mining (111)