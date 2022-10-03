function addAndRemove (command){
    let length = command.length;
    let number = 0;
    let result = [];
    for (let i = 0 ; i <length ; i++){
        if(command[i] == 'add'){
            number+= 1;
            result.push(number + ` `);
        }
        else {
            number+= 1;
            result.pop();
        }
        
    }
    let resultLength = result.length;
    if (number==0){
        console.log("Empty");
    }
    else if (resultLength==0){
        console.log("Empty");
    }
    else {
    console.log(result.join(""));
    }
}

addAndRemove ([`add`,`add`,`add`,`add`])