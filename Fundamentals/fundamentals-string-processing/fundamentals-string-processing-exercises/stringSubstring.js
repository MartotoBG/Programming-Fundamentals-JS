function findSameWords (word, text){
    const array = text.split(' ');
    let isFind = false;
    array.forEach(element => {
        element = element.toLowerCase();
        word = word.toLowerCase();
        if (element == word){
            isFind = true;
            return console.log(word);
        }
    });
    if(!isFind){
    console.log(`${word} not found!`);
    }
}

findSameWords('javascript',

'JavaScript is the best programming language')