function battle (array){
    let energy = array.shift().split(` `).map(x => Number(x));
    let distance = array.shift();
    let wins = 0;
    while (distance != "End of battle"){
        if (energy - distance >= 0){
            wins++
            energy -= distance;
            if (wins!= 0 && wins % 3 == 0 ){
                energy+= wins;
            }
        }
        else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            return;
        }
        distance = array.shift();
    }
    console.log(`Won battles: ${wins}. Energy left: ${energy}`);

}

battle (["200", 

"54", 

"14", 

"28", 

"13", 

"End of battle"]) 