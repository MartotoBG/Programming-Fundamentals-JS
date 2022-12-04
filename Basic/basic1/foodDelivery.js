function food (input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);
    let chickenprice = chicken * 10.35;
    let fishprice = fish * 12.4;
    let veganprice = vegan * 8.15;
    let total = chickenprice + fishprice + veganprice
    let cake = total - (total*0.8) + 2.5;
    let total2 = total + cake;
    console.log (total2);
}

food (["2","4","3"])