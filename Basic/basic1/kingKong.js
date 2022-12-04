function solve(input) {
    let budget = Number(input[0]);
    let workers = Number(input[1]);
    let clothes = Number(input[2]);
    let deckor = budget * 0.1;
    if (workers > 150){
        clothes = clothes * 0.9;
    }
    if (budget >= deckor + (workers * clothes)) {
        console.log("Action!");
        console.log (`Wingard starts filming with ${(budget - (deckor + (workers*clothes))).toFixed(2)} leva left.`);
    }
    else {
        console.log("Not enough money!");
        console.log (`Wingard needs ${((deckor + (workers * clothes)) - budget).toFixed(2)} leva more.`);
    }
    

}

solve (["20000","120","55.5"])