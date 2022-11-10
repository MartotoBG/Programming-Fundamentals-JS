function sub (string,start,letters){
    let result = '';
    for (let i = start; i<= letters; i++){
        result+= string[i];
    }
    console.log(result)
}

sub('ASentence', 1, 8)