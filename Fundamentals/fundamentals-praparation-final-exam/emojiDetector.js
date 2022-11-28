function detection (array){
    const pattern = /(?<symbol>\:{2}|\*{2})(?<emoji>[A-Z]{1}[a-z]{2}[a-z]*)\k<symbol>/g;
    const digitsPattern = /\d+/g;
    let emojiCool = 0;
    let digits = array[0].match(digitsPattern).join('').split('');
    let sum = 1;
    let count = 0;
    const emojiObject = {};
    for (let digit of digits){
        digit = Number(digit);
        sum *= digit;
    }
    const matches = array[0].matchAll(pattern);
    for (const match of matches){
        const emoji = match[2];
        
        for (const letter of emoji){
            emojiCool = emojiCool + Number(letter.charCodeAt());
        }
        emojiObject[match[0]] = emojiCool;
        emojiCool = 0;
        count++;
    }
    //Cool threshold: 540 4 emojis found in the text. The cool ones are: ::Smiley:: **Tigers** ::Mooning::
    console.log(`Cool threshold: ${sum}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);
    const entries = Object.entries(emojiObject);
    for (const entry of entries){
        const name = entry[0];
        const coolnes = entry[1];
        if (coolnes>sum){
            console.log(`${name}`)
        }
        }
}

detection (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])