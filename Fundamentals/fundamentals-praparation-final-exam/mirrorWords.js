function mirror (array){
    const pattern = /(?<symbol>@|#{1})(?<firstWord>[a-zA-Z]{3,})\k<symbol>{2}(?<secondWord>[a-zA-Z]{3,})\k<symbol>{1}/g;
    let matches = array[0].matchAll(pattern);
    let validWords = [];
    let reversedWords = [];
    let yellowPairs = 0;
    let greenPairs = 0;
    for (const match of matches){
        let currentWord = match.groups.firstWord;
        let reversedWord = match.groups.secondWord.split('').reverse().join('')

        if (currentWord == reversedWord){
            validWords.push(currentWord);
            reversedWords.push(reversedWord.split('').reverse().join(''));
            greenPairs++;
        }
        yellowPairs++;
    }
    if (yellowPairs == 0){
        console.log('No word pairs found!');
        if (greenPairs == 0){
            console.log('No mirror words!');
        }
    }
    else {
        console.log(`${yellowPairs} word pairs found!`);
        if (greenPairs == 0){
            console.log('No mirror words!');
        }
        else {
            console.log('The mirror words are:');
            let result = '';
            for (let i = 0; i< validWords.length; i++){
                
                if (i == validWords.length-1){
                    result += validWords[i]+' <=> '+ reversedWords[i];
                }
                else {
                    result += validWords[i]+' <=> '+ reversedWords[i] +', ';
                }
            }
            console.log(result)
        }
    }

}

mirror ([
'@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)