function hunt (array){
    let loot = array.shift().split(`|`);
    
    let action = array.shift().split(` `);
    let command = action.shift();
    let stealedItems = ``;
    let sum = 0;
    let count = 0;
    let isFail = true;
    while (command!= "Yohoho!"){
        
        switch(command){
            case "Loot" : for (let i = 0 ; i<action.length ; i++){
                if(loot.includes(action[i])){

                }
                else {
                    loot.unshift(action[i]);
                }
            } break;
            case "Drop" : if(loot.length > action[0] && action[0]>=0){
                let removedItem =loot[action[0]];
                loot.splice(action[0],1);
                loot.push(removedItem)
            } break;
            case "Steal" : if(loot.length>action[0] && action[0]>=0){
                for(let i = 0; i<action[0]; i++){
                    if(i==action[0]-1){
                        stealedItems += loot.pop();
                    }
                    else {
                    stealedItems += loot.pop() + `, `;
                    
                    }
                }
                
            }
            else if (loot.length == action[0]){
                stealedItems = loot.join(`, `);
                let index = loot.length;
                for(let i = 0 ; i < index ; i++){
                    loot.pop();
                }
            }
            else { 
                stealedItems = loot.join(`, `);
            } break;
        }
        
        action = array.shift().split(` `);
        command = action.shift();
    }
    if (stealedItems.length != 0){
    stealedItems = stealedItems.split(`, `);
    if(isFail){
        console.log(stealedItems.join(`, `));
    }
    else if (stealedItems.length != 0){
        stealedItems = stealedItems.reverse();
        console.log(stealedItems.join(`, `));
    }
    }
    for (let i = 0 ; i<loot.length; i++){
        sum += loot[i].length;
        count++;
    }
    
    if(loot.length == 0){
        console.log(`Failed treasure hunt.`)
    }
    else {
        console.log(`Average treasure gain: ${(sum/count).toFixed(2)} pirate credits.`);
    }
    
    

    
//     "Loot {item1} {item2}…{itemn}": 

// Pick up treasure loot along the way. Insert the items at the beginning of the chest.  

// If an item is already contained, don't insert it. 

// "Drop {index}": 

// Remove the loot at the given position and add it at the end of the treasure chest.  

// If the index is invalid, skip the command. 

// "Steal {count}": 

// Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are.  

// Print the stolen items separated by ", ": 

// "{item1}, {item2}, {item3} … {itemn}" 
}

hunt (["Gold|Silver|Bronze|Medallion|Cup", 

"Loot Wood Gold Coins", 

"Loot Silver Pistol", 

"Drop 3", 

"Steal 3", 

"Yohoho!"]) 