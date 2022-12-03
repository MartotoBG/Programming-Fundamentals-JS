function secret (array){
    let message = array.shift();
    let currentLine = array.shift().split(':|:');
    let command = currentLine.shift();
    while (command !== 'Reveal'){
        switch (command){
            case 'InsertSpace': {
                const insertIndex = Number(currentLine.shift());
                let firstPart = message.substring(0,insertIndex);
                let secondPart = ' ' + message.substring(insertIndex);
                message = firstPart + secondPart;
                console.log(message);
                break;
            }
            case 'Reverse': {
                let string = currentLine.shift();
                if (message.includes(string)){
                    let index= message.indexOf(string);
                    let firstPart = message.substring(0,index);
                    let secondPart = message.substring(index+string.length);
                    string = string.split('').reverse().join('');
                    message = firstPart + secondPart + string;
                    console.log(message);
                    
                }
                else {
                    console.log('error')
                }
                break;
            }
            case 'ChangeAll': {
                let oldString = currentLine.shift();
                let newString = currentLine.shift();
                let more = false;
                if (message.includes(oldString)){
                    more = true;
                }
                while (more !== false){
                    if (message.includes(oldString)){
                        more = true;
                        message = message.replace(oldString,newString);
                    }
                    else {
                        more = false;
                    }
                }  
                console.log(message);
                break; 
            }
        }
        currentLine = array.shift().split(':|:');
        command = currentLine.shift();
    }
    console.log(`You have a new text message: ${message}`)
}

secret([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])
  