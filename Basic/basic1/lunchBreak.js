function solve(input) {
    let name = (input[0]);
    let episode = Number(input[1]);
    let relax = Number(input[2]);
    let lunch = relax / 8;
    let relax2 = relax / 4;
    let freetime = relax - (relax2 + lunch + episode)

    if (relax >= lunch + relax2 + episode){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freetime)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${name}, you need ${(Math.floor(freetime))* -1} more minutes.`)
    }

    

}

solve (["GoT", 48 , 60])