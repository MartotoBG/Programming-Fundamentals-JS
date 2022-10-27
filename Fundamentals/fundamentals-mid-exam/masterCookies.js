function course (array){
    let budget = array.shift();
    let students = array.shift();
    let flourPrice = array.shift();
    let eggPrice = array.shift();
    let apronPrice = array.shift();
    let neededFlour = 0;
    // 100 eggs 1 apron 1 flour
    for (let i = 1 ; i<= students; i++){
        if (i % 5 ==0){

        }
        else {
            neededFlour += flourPrice;
        }
    }
    
    let neededEggs = eggPrice * students * 10;
    let neededApron = apronPrice
    neededApron *= Math.ceil(students*1.2);
    let expenses = neededApron + neededEggs + neededFlour;
    if (expenses <= budget) {
        console.log(`Items purchased for ${expenses.toFixed(2)}$.`)
    }
    else {
        let neededMoney = expenses- budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }
    
}

course ([100, 25, 4.0 ,1.0 ,6.0]);