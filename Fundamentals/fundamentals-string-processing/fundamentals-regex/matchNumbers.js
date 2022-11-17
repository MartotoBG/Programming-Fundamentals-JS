function match (string){
    const pattern = /\+359(?<firstGroup>[- ]){1}2\k<firstGroup>\d{3}\k<firstGroup>\d{4}\b/g;
    let text = string.shift();
    let result = text.match(pattern);
    console.log(result.join(', '))
    
}

match(['+359 2 222 2222, 359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])