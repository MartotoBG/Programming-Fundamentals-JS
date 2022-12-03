function mark (string){
    const pattern = /(?<symbol>=|\/)(?<place>[A-Z]{1}[A-Za-z]{2}[A-Za-z]*)\k<symbol>/g;
    let matches = string.matchAll(pattern);
    let word = '';
    let points = 0;
    let words = [];
    for(const match of matches){
        for (let i=1; i<match[0].length-1; i++){
            word+= match[0][i];
        }
        words.push(word);
        points += word.length;
        word ='';
        
    }
    console.log(`Destinations: ${words.join(', ')}`);
    console.log(`Travel Points: ${points}`);   
}

mark ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")