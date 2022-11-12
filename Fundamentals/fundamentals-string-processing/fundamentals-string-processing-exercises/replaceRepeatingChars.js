function dontRepeat(string) {
    let result = '';
    const length = string.length;
    for (let i = 0; i < length; i++) {
        const currentChar = string[i];
        const nextChar = string[i+1];
        if(currentChar !== nextChar){
            result += `${string[i]}`;
        }
    }
    console.log(result);
}

dontRepeat('aaaaabbbbbcdddeeeedssaa')