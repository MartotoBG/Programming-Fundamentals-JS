function search (numbers, commands){
    // purvo vzemam chislata 
    // maham brojkata ot masiva
    // tursq kolko pyti ima chisloto ot index 2 ot vtoriq masiv
    let takenNumbers = numbers.slice(0, commands[0]);
    //console.log(takedNumbers);
    takenNumbers.splice(0,commands[1]);
    //console.log(takedNumbers)
    let length = takenNumbers.length;
    let count = 0 ;
    for (let i = 0 ; i < length ; i++){
        if(takenNumbers[i] == commands[2]){
            count++;
        }
    }
    console.log(`Number ${commands[2]} occurs ${count} times.`)
}

search ([5, 2, 3, 4, 1, 6],

        [5, 2, 3])