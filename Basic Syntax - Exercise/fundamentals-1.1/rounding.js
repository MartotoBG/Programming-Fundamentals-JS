function solve (number , round) {
    
    if (round >=15){
        round=15
    }
    number = number.toFixed(round)
    console.log(parseFloat(number))
}