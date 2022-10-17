function list (food){
    food.sort();
    for (let i = 0 ; i < food.length ; i++){
        console.log(`${i+1}.${food[i]}`)
    }
}

list (['Potatoes', 'Tomatoes', 'Onions',

'Apples']);