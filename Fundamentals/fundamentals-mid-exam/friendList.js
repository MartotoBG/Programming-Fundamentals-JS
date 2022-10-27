function list (array){
    let friends = array.shift().split(", ");
    let action = array.shift().split(` `);
    let command = action.shift();
    let index = 0;
    let count = 0;
    let loses = 0;
    
    while (command != "Report"){
        switch (command){
            case "Blacklist" : if(friends.includes(action[0])){
                for(let i = 0 ; i < friends.length; i++){
                    if(friends[i] == action[0]){
                        let blacklistedName = friends[i];
                        friends.splice(i,1,"Blacklisted");
                        console.log(`${blacklistedName} was blacklisted.`)
                        count++;
                    }
                }
            }
            else {
                console.log(`${action[0]} was not found.`);
            } break;

            case "Error" : index = action[0];
            if (index>=0 && index<friends.length && friends[index] != "Blacklisted" && friends[index] != "Lost"){
                let lostName = friends[index];
                friends[index] = "Lost";
                console.log(`${lostName} was lost due to an error.`);
                loses++;
            } break;

            case "Change" : index = action[0];
                if(index>=0 && index<friends.length){
                    let oldName = friends[index];
                    let newName = action[1];
                    friends.splice(index,1,action[1]);
                    console.log(`${oldName} changed his username to ${newName}.`)
                } break;
        }
        action = array.shift().split(` `);
        command = action.shift();
    }
    console.log(`Blacklisted names : ${count}`);
    console.log(`Lost names: ${loses}`);
    console.log(friends.join(` `));
}

list (["Mike, John, Eddie, William","Error 3","Error 3","Change 0 Mike123","Report"])