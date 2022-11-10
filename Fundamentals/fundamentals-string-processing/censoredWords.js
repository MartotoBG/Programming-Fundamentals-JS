function censore (sentence, word){
    let result = sentence;
    let count = 0;
    while (result.includes(word)){
        result = result.replace(word,'*'.repeat(word.length))
        count++
    }
    console.log(count)
}

censore('A small sentence with some words',

'small')