function burger (array){
    let cities = Number(array.shift());
    let city = array.shift();
    let earnings = Number(array.shift());
    let expenses = Number(array.shift());
    let sum = 0;
    let expensesSum = 0;
    //na wseki 3 grad razhodite sa 50% poweche zaradi special event
    // na vseki 5 dena gubi 10% ot earnings i nqma special event toest nqma 50% poveche razhodi
    for (let i = 1; i<=cities; i++){
        if(i % 5 == 0){
            earnings *= 0.9;
            sum += earnings;
            expensesSum += expenses;
            console.log(`In ${city} Burger Bus earned ${(earnings-expenses).toFixed(2)} leva.`);
            city = array.shift();
            earnings = Number(array.shift());
            expenses = Number(array.shift());
        }
        else if (i % 3 == 0){
            expenses *= 1.5;
            sum += earnings;
            expensesSum += expenses;
            console.log(`In ${city} Burger Bus earned ${(earnings-expenses).toFixed(2)} leva.`);
            city = array.shift();
            earnings = Number(array.shift());
            expenses = Number(array.shift());
        }
        else {
            sum += earnings;
            expensesSum += expenses;
            console.log(`In ${city} Burger Bus earned ${(earnings-expenses).toFixed(2)} leva.`);
            city = array.shift();
            earnings = Number(array.shift());
            expenses = Number(array.shift());
        }
    } 


    console.log(`Burger Bus total profit:${(sum-expensesSum).toFixed(2)}`)
}

burger(["5","Sofia","895.67","213.50","Plovdiv","2563.20","890.26","Burgas","2360.55","600.00","ST Z","1000","200","pleven","300","100"])