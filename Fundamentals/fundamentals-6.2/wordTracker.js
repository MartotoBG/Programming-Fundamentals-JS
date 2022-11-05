function trackWords (array){
    const trackedWords = array.shift().split(` `);
    const length = trackedWords.length;
    const countWords = {};
        trackedWords.forEach(word => {
        countWords[word] = 0;
    });
    array.forEach(element => {
        for (let i = 0 ; i< length; i++){
            if (element == trackedWords[i]){
                countWords[element] +=1
            }
        }
    });
    const entries = Object.entries(countWords);
    entries.sort((a,b) => b[1] - a[1]);
    for (const count of entries){
        console.log(`${count[0]} - ${count[1]}`)
    }
}

trackWords ([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])