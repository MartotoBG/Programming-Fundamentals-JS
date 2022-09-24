function solve (start , end) {
    let text = ``;
    let sum = 0;
    for (let i = start ; i <=end ; i++){
        text+= i + ` `
        sum +=i
    }
    console.log(text);
    console.log(`Sum: ${sum}`)
}

solve ( 5 , 10)