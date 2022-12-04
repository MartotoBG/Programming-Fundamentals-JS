function diction (array){
    let words = array.shift().split(' | ');
    let length = words.length;
    let wordObject = {};
    let word = '';
    let definition = '';
    for (let i = 0 ; i< length; i++){
        word = words[i].split(': ')[0];
        definition = words[i].split(': ')[1];
        if (wordObject[word]){
            wordObject[word].push(definition);
        }
        else {
            wordObject[word] = [];
            wordObject[word].push(definition);
        }
    }
    let final = array.pop();
    let teacherWords = array[0].split(' | ');
    let entries = Object.entries(wordObject);
    let result = ''
    if (final == 'Hand Over'){
        for (let entry of entries){
            let name = entry[0];
            result+=name +' ';
        }
        console.log(result)
    }
    else if (final == 'Test'){
        for (let i = 0; i<teacherWords.length; i++){
            if (wordObject[teacherWords[i]]){
                let name = teacherWords[i];
                console.log(`${name}:`);
                let definitions = wordObject[name];
                for (let i = 0 ; i< definitions.length; i++){
                    console.log(` -${definitions[i]}`);
                }
            }
        }
    }
}

diction (["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | code | tackle",
"Test"])



