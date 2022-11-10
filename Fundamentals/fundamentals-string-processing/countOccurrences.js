function count (text, searchedWord){
    let count = 0;
    for (const word of text.split(' ')){
        if(word == searchedWord){
            count++;
        }
    }
    console.log(count)
}

count('softuni is great place for learning new programming languages',

'softuni')