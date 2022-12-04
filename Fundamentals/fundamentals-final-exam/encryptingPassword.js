function encrypt (array){
    let number = Number(array.shift());
    let pattern = /(?<symbol>[\w\W]+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[\W\w^<>]{3})<\k<symbol>/g;
    for (let i = 0 ; i<number; i++){
        let match = pattern.exec(array[i]);
        if (match){
            let digits = match.groups['first'];
            let lower = match.groups['second'];
            let upper = match.groups['third'];
            let symbols = match.groups['fourth'];
            let result = digits + lower + upper + symbols;
            console.log(`Password: ${result}`);
        }
        else {
            console.log('Try another password!');
        }

       // console.log(match)
        match = pattern.exec(array[i]);
    }
}

encrypt(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])

