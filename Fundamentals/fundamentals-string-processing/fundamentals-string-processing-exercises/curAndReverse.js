function cutAndReverse (string){
    const length = string.length;
    const firstHalf = string.substring(0,length/2);
    const secondHalf = string.substring(length/2);
    let firstResult = '';
    let secondResult = '';
    for (let i = length/2-1; i>=0; i--){
        firstResult+= firstHalf[i];
    }
    for (let i = length/2-1; i>=0; i--){
        secondResult+= secondHalf[i];
    }
    console.log(firstResult);
    console.log(secondResult);
}

cutAndReverse ('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')