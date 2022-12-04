function solve(input) {
    let index = 0;
    
   
    let command = input[index];
    index++;
    let bestPlayerName = "";
    let bestPlayerGoals = 0;
    while (command !== "END"){
        let name  = command;
        let goals = Number(input[index]);
        index++;
        if (goals>bestPlayerGoals){
            bestPlayerName = name;
            bestPlayerGoals = goals;
        }
        if (goals>=10){
            break;
        }
        command = input[index];
        index++
        

    }
    console.log(`${bestPlayerName} is the best player!`);
    if (bestPlayerGoals >=3){
    console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`He has scored ${bestPlayerGoals} goals.`)
    }
}
solve(["Neymar", "2" , "Ronaldo" , "1", "Messi", "3", "END"])