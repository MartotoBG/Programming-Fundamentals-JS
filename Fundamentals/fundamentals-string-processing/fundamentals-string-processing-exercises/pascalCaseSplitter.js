function pascalCase (string){
    let result = [];
    let currentWord = '';
    const length = string.length;
    for (let i = 0; i<length; i++){
        const currentChar = string[i];
        const nextChar = string[i+1];
        if(nextChar){
        if (nextChar.charCodeAt()>= 65 && nextChar.charCodeAt() <= 90){
            currentWord += `${currentChar}`;
            result.push(currentWord);
            currentWord = '';
        }
        else {
            currentWord += `${currentChar}`;
        }
        }
        else if(i+1 == length){
            currentWord += `${currentChar}`;
            result.push(currentWord);
        }
    }
   console.log(result.join(', '))
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')