function solve(input) {
    let index = 0;
    let computers = Number(input[index]);
    index++;
    let sales = Number(input[index]);
    sales = sales.toString();
    let rating = sales.charAt(2);
    let rating1 = 0;

    let sales1 = sales.charAt(0) + sales.charAt(1);
    let money = 0;
    for ( index ; index < computers + 1 ; index++){
        sales = input[index];
        sales = sales.toString()
        rating = sales.charAt(2);
        sales1 = sales.charAt(0) + sales.charAt(1);
        sales1 = Number(sales1)
        switch (rating){
            case "2" : money += sales1 * 0; break;
            case "3" : money += sales1 * 0.5; break; 
            case "4" : money += sales1 * 0.7; break; 
            case "5" : money += sales1 * 0.85; break; 
            case "6" : money += sales1 ; break; 

        }
        rating = Number(rating);
        rating1 += rating;
        rating = rating.toString()
    }

    console.log ((money).toFixed(2))
    console.log((rating1/computers).toFixed(2))
}
solve(["2","204","206"])