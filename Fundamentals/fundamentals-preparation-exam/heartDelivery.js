function love (array){
    let houses = array.shift().split(`@`).map(x => Number(x));
    let action = array.shift().split(` `);
    let command = action.shift();
    let count = 0;
    let lastPosition = 0;
    let start = 0;
    while (command != "Love!"){
        action = Number(action);
        action += start;
        if (action >= houses.length){
            action = 0;
        }
        start = action;
        if (houses[action] == 0){
            console.log(`Place ${action} already had Valentine's day.`)
        }
        else {
            houses[action] -= 2;
            if (houses[action] == 0){
            console.log(`Place ${action} has Valentine's day.`)
            }
        }
        lastPosition = action;
        action = array.shift().split(` `);
        command = action.shift();
    }
    for (let i = 0 ; i<houses.length; i++){
        if(houses[i] == 0){
        }
        else {
            count++;
        }
    }
    console.log(`Cupid's last position was ${lastPosition}.`)
    if (count == 0){
        console.log(`Mission was successful.`);
    }
    else {
        console.log(`Cupid has failed ${count} places.`)
    }
}

love (["2@4@2", 

"Jump 2", 

"Jump 2", 

"Jump 8", 

"Jump 3", 

"Jump 1", 

"Love!"]) 