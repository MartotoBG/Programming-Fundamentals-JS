function battle (array){
    if (array.length == 1 && array.includes("Retire")){
        console.log(`Pirate ship status: 0`);
        console.log(`Warship status: 0`);
        return;
    }
    let pirateShipStatus = array.shift().split(`>`).map(x => Number(x));
    let warShipStatus = array.shift().split(`>`).map(x => Number(x));
    
    let maxHealth = Number(array.shift());
    let action = array.shift().split(` `);
    let command = action.shift();
    let count = 0;
    for (let i = 0; i<pirateShipStatus.length ; i++){
        if(pirateShipStatus[i] > maxHealth){
            pirateShipStatus[i] = maxHealth;
        }
    }
    for (let i = 0; i<warShipStatus.length ; i++){
        if(warShipStatus[i] > maxHealth){
            warShipStatus[i] = maxHealth;
        }
    }
    while (command != "Retire"){
        switch(command){
            case "Fire" : let index = Number(action[0]);
                          let damage = Number(action[1]);
                          if(index < warShipStatus.length && index>= 0){ 
                            if(warShipStatus[index] - damage <= 0){
                                console.log("You won! The enemy ship has sunken.");
                               return;
                            }
                            else {
                                warShipStatus[index] -= damage;
                            }
                          } break;

            case "Defend" :  let startIndex = Number(action[0]);
                             let endIndex = Number(action[1]);
                             let attack = Number(action[2]);
                             if(startIndex>=0 && endIndex >=0 && startIndex< pirateShipStatus.length && endIndex <pirateShipStatus.length && endIndex>=startIndex){
                                for (let i = startIndex ; i<=endIndex ; i++){
                                    if(pirateShipStatus[i] - attack <=0){
                                        console.log("You lost! The pirate ship has sunken.");
                                        return;
                                    }
                                    else {
                                        pirateShipStatus[i] -= attack;
                                    }
                                }
                             } break;

            case "Repair" : let repairedIndex = Number(action[0]);
                            let health = Number(action[1]);
                            if(repairedIndex>=0 && repairedIndex<pirateShipStatus.length){
                                pirateShipStatus[repairedIndex] += health;
                                if(pirateShipStatus[repairedIndex] > maxHealth){
                                    pirateShipStatus[repairedIndex] = maxHealth;
                                }
                            } break;

            case "Status" :     
                                for (let i = 0 ; i <pirateShipStatus.length; i++){
                                if(pirateShipStatus[i]< maxHealth*0.2 && (pirateShipStatus.length!=1 || !pirateShipStatus.includes(0))){
                                    count++;
                                }
                                 }
                                 console.log(`${count} sections need repair.`);
                                 count = 0;
                                  break;
        }
        action = array.shift().split(` `);
        command = action.shift();
   }
   let sumOfPirateShipStatus = 0;
   let sumOfWarShipStatus = 0;
   for (let i = 0 ; i<pirateShipStatus.length; i++){
        sumOfPirateShipStatus+= pirateShipStatus[i];
   }

   for (let i = 0 ; i<warShipStatus.length; i++){
    sumOfWarShipStatus+= warShipStatus[i];
}
   
    console.log(`Pirate ship status: ${sumOfPirateShipStatus}`);
    console.log(`Warship status: ${sumOfWarShipStatus}`);

    // "Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section. 
    //Check if the index is valid and if not, skip the command. If the section breaks (health <= 0) the warship sinks, 
    //print the following and stop the program: "You won! The enemy ship has sunken." 

    // "Defend {startIndex} {endIndex} {damage}" - 
    //the warship attacks the pirate ship with the given damage at that range (indexes are inclusive). 
    //Check if both indexes are valid and if not, skip the command. If the section breaks (health <= 0) 
    //the pirate ship sinks, print the following and stop the program: 
    
    // "You lost! The pirate ship has sunken." 
    
    // "Repair {index} {health}" - the crew repairs a section of the pirate ship with the given health. 
    //Check if the index is valid and if not, skip the command. The health of the section cannot exceed the maximum health capacity. 
    
    // "Status" - prints the count of all sections of the pirate ship that need repair soon, 
    //which are all sections that are lower than 20% of the maximum health capacity. Print the following: 
    
    // "{count} sections need repair." 
}

battle (["2>3>4>5>2", 

"6>7>8>9>10>11", 

"20", 

"Status", 

"Fire 2 3", 

"Defend 0 4 11", 

"Repair 3 18", 

"Retire"]) 