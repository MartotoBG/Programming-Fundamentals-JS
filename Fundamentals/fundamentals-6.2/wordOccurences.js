function count (array){
    const words = {};
    array.forEach(word => {
        if (words[word]){
            words[word] += 1;
        }
        else {
        words[word] = 1; 
        }
    });
    const entries = Object.entries(words);
    entries.sort((a,b) => b[1] - a[1]);
    for (const word of entries){
        console.log(`${word[0]} -> ${word[1]} times`)
    }
}

count (["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])