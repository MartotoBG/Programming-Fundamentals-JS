function manage (array){
    let capacityPerUser = Number(array.shift());
    let currentLine = array.shift().split('=');
    let command = currentLine.shift();
    let users = {};
    let count = 0
    while (command !=='Statistics'){
        switch(command){
            case 'Add': {
                let name = currentLine.shift();
                let sent = Number(currentLine.shift());
                let receive = Number(currentLine.shift());
                if (users[name]){

                }
                else {
                    users[name] = {
                        sent: sent,
                        receive: receive,
                        
                    }
                    count++;
                }
                break;
            }
            case 'Message': {
                let sender = currentLine.shift();
                let receiver = currentLine.shift();
                if (users[sender] && users[receiver]){
                users[sender].sent+=1;
                
                
                users[receiver].receive+=1;
                
                let firstAllMessages = Number(users[sender].sent) + Number(users[sender].receive);
                let secondAllMessages = Number(users[receiver].sent) + Number(users[receiver].receive);
                if (firstAllMessages>=capacityPerUser ){
                    
                    console.log(`${sender} reached the capacity!`);
                    delete users[sender];
                    count--;
                }
                if (secondAllMessages>=capacityPerUser){
                    
                    console.log(`${receiver} reached the capacity!`);
                    delete users[receiver];
                    count--;
                }
            }
                break;
            }
            case 'Empty': {
                let name = currentLine.shift();
                if (name == 'All'){
                    delete users;
                    count = 0;
                    users = {};
                }
                else if(users[name]){
                    delete users[name];
                    count--;
                }
            }
        }
        currentLine = array.shift().split('=');
        command = currentLine.shift();
    }
    console.log(`Users count: ${count}`);
    let entries = Object.entries(users);
    for (let entry of entries){
        let messages = Number(entry[1].sent)+Number(entry[1].receive)
        console.log(`${entry[0]} - ${messages}`)
    }
}

manage(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"])	




