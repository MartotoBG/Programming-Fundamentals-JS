function game (array){
    let string = array.shift().toString();
    let currentLine = array.shift().split(' ');
    let command = currentLine.shift();
    if (string == null){
        return;
    }
    
    while (command !=='Done'){
        switch(command){
            case 'Change' : {
                let firstSubstring = currentLine.shift();
                let secondSubstring = currentLine.shift();
                if (string.includes(firstSubstring)){
                    let isDone = false;
                    while (isDone !== true){
                        if (string.includes(firstSubstring)){
                            string = string.replace(firstSubstring,secondSubstring);
                        }
                        else {
                            isDone = true;
                        }
                    }   
                    

            }
            console.log(string); 
            break;
        }
        case 'Includes': {
            let substring = currentLine.shift();
            if (string.includes(substring)){
                console.log('True');
            }
            else {
                console.log('False');
            }
            break;
        }
        case 'Uppercase': {
            let newString = string.toUpperCase();
            string = newString;
            console.log(string); 
            break;
        }
        case 'FindIndex': {
            let char = currentLine.shift();
            let index = string.indexOf(char);
            console.log(index);
            break;
        }
        case 'Cut': {
            let index = Number(currentLine.shift());
            let count = Number(currentLine.shift());
            let newString = string.substring(index,index+count);
            let firstPart = string.substring(0,index);
            let secondPart = string.substring(index+count);
            let cut = firstPart + secondPart;
            string = newString;
            console.log(string)
            break;
        }
        case 'End':{
            let substring = currentLine.shift();
            let length = substring.length;
            let last = string.substring(string.length-length);
            if (last == substring){
                console.log('True');
            }
            else {
                console.log('False');
            }
            break;
        }
    }
        currentLine = array.shift().split(' ');
        command = currentLine.shift();
}
}
game([123,
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])


