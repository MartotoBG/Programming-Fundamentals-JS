function shoot (array){
    let target = array.shift().split(` `).map(x=> Number(x))
    let damage = array.shift();
    let count = 0;
    
    while (damage != "End"){
        damage = damage.split(` `);
        damage = damage.map(x=> Number(x));
        if (damage >= 0 && damage < target.length && target[damage] != -1){
            for (let i = 0 ; i < target.length; i++){
                if (i == damage){

                }
                else if (target[damage] < target[i] && target[i] != -1){ 
                    target[i] -= target[damage];
                }
                else if (target[i] != -1){
                    target[i] += target[damage];
                }
                
            }
            count++;
            target[damage] = -1;
        }


        damage = array.shift();
    }
   console.log(`Shot targets: ${count} -> ${target.join(` `)}`) 
}

shoot (["24 50 36 70", 

"0", 

"4", 

"3", 

"1", 

"End"]) 