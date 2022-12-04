function solve(input) {
    let index = 0;
    let steps = 0;
    let allsteps = 0;
    let returns = 0;
    while (input[index] !== "Going home"){
        steps = Number(input[index]);
        allsteps += steps;
        if (index>=input.length && allsteps<10000){
            console.log(`${10000-allsteps} more steps to reach goal.`)
            return;
        }
        else if (index === input.length-1 && allsteps<10000){
            console.log(`${10000-allsteps} more steps to reach goal.`);
            return;
        }
        else if (index === input.length-1 && allsteps>=10000){
            console.log(`Goal reached! Good job!\n${allsteps-10000} steps over the goal!`)
            return;
        }
        returns++;
        index++;
}
for (i= index; i<input.length-1; i++){
    steps = Number(input[returns+1]);
    allsteps +=steps;
}
if (allsteps>=10000){
    console.log(`Goal reached! Good job!\n${allsteps-10000} steps over the goal!`);
    
}
else if (allsteps<10000){
    console.log(`${10000-allsteps} more steps to reach goal.`);
}

}
solve(["1500",

"300",

"2500",

"3000",

"Going home",

"200",
])