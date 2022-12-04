function message(array) {
    let pattern = /^([$%])(?<tag>[A-Z]{1}[a-z]{2,})\1: \[(?<number1>\d+)\]\|\[(?<number2>\d+)\]\|\[(?<number3>\d+)\]\||$/g
    let tags = Number(array.shift());
    for (let i = 0; i < tags; i++) {
        let match = array[i].match(pattern);
        if (match[0].length > 0) {

            let name = match.join('').split(': ')[0];
            let newName = '';
            let numbers = match.join('').split(': ')[1].split('|');
            let newNumbers = '';
            let decrypt = '';
            for (let i = 0; i < numbers.length-1; i++) {
                for (let j = 1; j < numbers[i].length-1; j++) {
                   
                    newNumbers += numbers[i][j]; 
                }
                newNumbers += ' ';
            }
            newNumbers = newNumbers.split(' ');
            newNumbers.pop()
            console.log(newNumbers.length)
           if (newNumbers.length<=3){
            for (let i = 0; i<newNumbers.length; i++){
                newNumbers[i] = Number(newNumbers[i]);
                getCurrentChar = String.fromCharCode(newNumbers[i]);
                decrypt+=getCurrentChar;
                
            }
            console.log(decrypt)
            
           
            for (let i = 1; i < name.length - 1; i++) {
                newName += name[i];
            }
           
       }
    }
        else {
            console.log('Valid message not found!');
        }

    }
}

message((["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"]))