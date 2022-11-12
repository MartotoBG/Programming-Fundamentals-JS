function reveal (words,sentence){
    wordsArray = words.split(', ');
    
    wordsArray.forEach(word => {
        const match = ` ${'*'.repeat(word.length)}`;
        sentence = sentence.replace(match,` ${word}`);
    });
    console.log(sentence)
}

reveal('great, learning',

'softuni is ***** place for ******** new programming languages')