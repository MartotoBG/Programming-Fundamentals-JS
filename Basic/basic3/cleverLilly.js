function solve(input) {
    let age = Number(input[0]);
    let laundry = Number(input[1]);
    let toys = Number(input[2]);
    let money = 0 ;
    let money1 = 0;
    let money3 = 0;
    
       for (i=1 ; i<=age ; i +=2){
            money += toys    
       }
       for (i=2; i<=age ; i+=2){
        money1 = money1 + 10*i/2;
        money3 = money1 - 1*i/2
       }
       let money2 = money+money3;
       if ( money2 >= laundry){
        console.log(`Yes! ${(money2-laundry).toFixed(2)}`);
       }
       else {
        console.log(`No! ${(laundry-money2).toFixed(2)}`)
       }
        
    

}
solve([10, 170, 6])