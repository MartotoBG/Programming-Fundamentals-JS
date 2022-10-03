function printN (input){
    let length = input.length;
    let x = Number(input[length-1]);
    let log = ``;
    for (let i = 0; i < length-1 ; i+=x){
        log+=input[i] + ` `;
    }
    console.log(log)
}

printN(['5', '20', '31', '4', '20', '2'])