function order (array){
    let phones =array.shift().split(`, `);
    let action = array.shift().split(` `);
    let command = action.shift();
    while (command != "End"){
        switch (command){
            case "Add": if(!phones.includes(action[1])){
                phones.push(action[1]);
            } break;
            case "Remove" : if(phones.includes(action[1])){
                for (let i = 0 ; i < phones.length; i++){
                    if(phones[i] == action[1]){
                        phones.splice(i,1);
                        break;
                    }
                }
            } break;
            case "Bonus" : action.splice(0,2);
                action = action.toString()
                action = action.split(`:`);
                for (let i = 0 ; i<phones.length; i++){
                    if(phones[i] == action[0]){
                        phones.splice(i+1,0,action[1]);
                        break;
                    }
                }
            break;
            case "Last" : for (let i = 0; i<phones.length;i++){
                if(phones[i] == action[1]){
                    let lastPhone = phones[i];
                    phones.splice(i,1);
                    phones.push(lastPhone);
                }
            } break;
        }
        action = array.shift().split(` `);
        command = action.shift();
    }
    console.log(phones.join(`, `));
}

order (["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End" ])