function hashtag (text){
    textArray = text.split(' ');
    let result = [];
    textArray.forEach(word => {
        
        let isValid = word.startsWith('#') && word.length > 1;
        word = word.substring(1)
        if(isValid){
            for (let letter of word){
                letter = letter.toLowerCase();
                if(letter.charCodeAt() <97 || letter.charCodeAt() > 122){
                    isValid = false;
                    break;
                }
            }
            if(isValid){
                result.push(word)
            }
        }
    });
   result.forEach(word => {
    console.log(word)
   })
}

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')