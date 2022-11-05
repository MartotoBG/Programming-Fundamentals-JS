function cardHand (array){
    for (let i = 0 ; i<array.length; i++){
    let person = array.shift();
    person = person.split(`, `);
    let name = person.shift();
    let cards = person
    console.log(person)
    }
    //(S -> 4, H-> 3, D -> 2, C -> 1).
}

cardHand ([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])