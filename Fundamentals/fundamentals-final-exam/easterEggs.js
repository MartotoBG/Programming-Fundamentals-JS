function second(array){
    let pattern = /[@|#]+(?<color>[a-z]{3,})[@|#]+[\W|\_]*\/+(?<amount>[0-9]+)\/+/g;
    let matches = array[0].matchAll(pattern);
    for (let match of matches){
        console.log(`You found ${match[2]} ${match[1]} eggs!`)
    }
}

second((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']))