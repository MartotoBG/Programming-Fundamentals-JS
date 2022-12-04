function third(array){
    let currentLine = array.shift().split('-');
    let command = currentLine.shift();
    let guests = {};
    let unliked = 0;
    while (command !== 'Stop'){
        switch (command){
            case 'Like': {
                let name = currentLine.shift();
                let meal = currentLine.shift();
                if (guests[name]){
                    if (guests[name].likedMeals.includes(meal)){

                    }
                    else {
                        guests[name].likedMeals.push(meal)
                    }
                }
                else {
                    guests[name] = {
                        likedMeals: [],
                    };
                    guests[name].likedMeals.push(meal)
                }
                break;
            }
            case 'Dislike': {
                let name = currentLine.shift();
                let meal = currentLine.shift();
                if (guests[name]){
                    if (guests[name].likedMeals.includes(meal)){
                        let index = guests[name].likedMeals.indexOf(meal);
                        delete guests[name].likedMeals[index];
                        console.log(`${name} doesn't like the ${meal}.`)
                        unliked ++;
                    }
                    else {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                }
                else {
                    console.log(`${name} is not at the party.`);
                }
            }
        }
        currentLine = array.shift().split('-');
        command = currentLine.shift();
    }
    let entries = Object.entries(guests);
    for (let entry of entries){
        let zero = entry[1]
        console.log(`${entry[0]}: ${entry[1].likedMeals.join(', ')}`)
    }
    console.log(`Unliked meals: ${unliked}`);
}

third(['Like-Katy-fish',
    'Dislike-Katy-fish',
    'Stop'])