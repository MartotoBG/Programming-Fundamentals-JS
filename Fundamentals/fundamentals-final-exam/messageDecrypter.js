function messageDecrypter(input){
    let countTags = Number(input.shift());
        pattern = /^([$%])(?<tag>[A-Z]{1}[a-z]{2,})\1: \[(?<number1>\d+)\]\|\[(?<number2>\d+)\]\|\[(?<number3>\d+)\]\|$/g
        //           /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<number1>\d+)\]\|\[(?<number2>\d+)\]\|\[(?<number3>\d+)\]\|$/g;
    for (let index = 0; index < countTags; index++) {
        let tagRow = input[index];
        let valid = pattern.exec(tagRow);
 
        if (valid) {
            
                const tag = valid.groups['tag']
                const firstNumber = valid.groups['number1'];
                const secondNumber = valid.groups['number2'];
                const lastNumber = valid.groups['number3'];
 
                let result = String.fromCharCode(firstNumber, secondNumber, lastNumber);
                console.log(`${tag}: ${result}`);
 
                
            
        } else {
            console.log('Valid message not found!');
        }
        valid = pattern.exec(tagRow);
        tagRow = input[index];
        
    }
}

messageDecrypter (((["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"])))