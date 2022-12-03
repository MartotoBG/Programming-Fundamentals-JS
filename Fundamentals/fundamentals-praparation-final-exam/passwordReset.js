function reset (array){
    let string = array.shift();
    let currentLine = array.shift().split(' ');
    let command = currentLine.shift();
    while (command !== 'Done'){
        switch (command){
            case 'TakeOdd' : {
                let newSting = '';
                let length = string.length;
                for (let i=1;i<length; i+=2){
                    newSting+= string[i];
                }
                string = newSting;
                newSting = '';
                console.log(string);
                break;
            }
            case 'Cut' : {
                const index = Number(currentLine.shift());
                const length = Number(currentLine.shift());
                const firstPart = string.substring(0,index);
                const secondPart = string.substring(index+length);
                string = firstPart + secondPart;
                console.log(string);
                break;
            }
            case 'Substitute' : {
                let oldString = currentLine[0];
                oldString = oldString.split('');
                let newString = currentLine[1];

                const length = string.length;
                if (string.includes(oldString[0])){
                    for (let i = 0 ; i<length; i++){
                        if (string[i] == oldString[0]){
                           oldString = oldString.join('');
                            string = string.replace(oldString,newString);
                            oldString = oldString.split('');
                        }
                    }
                    console.log(string);
                }
                else {
                    console.log('Nothing to replace!')
                }
                break;
            }
        }
        currentLine = array.shift().split(' ');
        command = currentLine.shift();
    }
    console.log(`Your password is: ${string}`)
}

reset ((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
)