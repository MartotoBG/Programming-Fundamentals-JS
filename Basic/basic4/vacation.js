function vacation(input){
    let budget = Number(input[0]);
    let cash = Number(input[1]);
    let spendDay = 0;
    let index = 2;
    let days = 0;
  
    while (budget > cash && spendDay !== 5){
        if(input[index] === "spend"){
            cash -= Number(input[index + 1]);
            if (cash < 0){
                cash = 0;
            }
            spendDay++;
        } else{
            cash += Number(input[index + 1]);
            spendDay = 0;
        }
        days++;
        index += 2;
    }
  
    if (spendDay !== 5){
        console.log(`You saved the money for ${days} days.`);
    } else{
        console.log(`You can't save the money.\n${days}`)
    }    
}
vacation (["2000",

"1000",

"spend",

"1200",

"save",

"2000"])
 
//РЕШЕНИЕ СЪС SWIFT():
 
function vacation(input){
    let budget = Number(input.shift());
    let cash = Number(input.shift());
    let spendDay = 0;
    let days = 0;
  
    while (budget > cash && spendDay !== 5){
        if(input.shift() === "spend"){
            cash -= Number(input.shift());
            if (cash < 0){
                cash = 0;
            }
            spendDay++;
        } else{
            cash += Number(input.shift());
            spendDay = 0;
        }
        days++;
    }
  
    if (spendDay !== 5){
        console.log(`You saved the money for ${days} days.`);
    } else{
        console.log(`You can't save the money.\n${days}`)
    }    
}
