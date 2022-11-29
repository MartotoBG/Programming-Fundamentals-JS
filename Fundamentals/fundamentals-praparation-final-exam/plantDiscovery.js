function discover(array) {
    const numberOfPlants = Number(array.shift());
    const plantsObject = {};
    let plantRarity = '';
    for (let i = 0; i < numberOfPlants; i++) {
        const plantName = array[i].split('<->')[0];
         plantRarity = Number(array[i].split('<->')[1]);
        plantsObject[plantName] = [plantRarity];
    }
    for (let i = 0; i < numberOfPlants; i++) {
        array.shift();
    }

    let action = array.shift();
    action = action.split(': ')
    let command = action.shift();
    while (command !== 'Exhibition') {
        switch (command) {
            case 'Rate':
                
                let name = action.join('').split(' - ')[0];
                if (plantsObject[name]){
                let rating = Number(action.join().split(' - ')[1]);
                plantsObject[name].push(rating);
                }
                else {
                    console.log('error');
                }
                break;
            case 'Update':
                let plantName = action.join('').split(' - ')[0];
                if (plantsObject[plantName]){
                let newRating = Number(action.join().split(' - ')[1]);
                plantsObject[plantName][0] = newRating;
                }
                else {
                    console.log('error')
                }
                break;
            case 'Reset':
                let namePlant = action[0];
                if (plantsObject[namePlant]){
                plantsObject[namePlant].splice(1);
                }
                else {
                    console.log('error')
                }
                break;
        }
        action = array.shift();
        action = action.split(': ')
        command = action.shift();
    }

    console.log('Plants for the exhibition:');
    const entries = Object.entries(plantsObject);
    for (const entry of entries){
        let sum = 0;
        let count = 0;
        const plantName = entry.shift();
        const plantRate = entry[0].shift();
        const length = entry[0].length;
        for (let i = 0; i<length; i++){
            sum += Number(entry[0][i]);
            count++;
        }
        let average = sum/count;
        if (!average){
            average = 0
            console.log(`- ${plantName}; Rarity: ${plantRate}; Rating: ${(average).toFixed(2)}`);
        }
        else {
            console.log(`- ${plantName}; Rarity: ${plantRate}; Rating: ${(average).toFixed(2)}`);
        }
        
    }
}

discover(["3",

"Arnoldii<->4",

"Woodii<->7",

"Welwitschia<->2",

"Rate: Woodii - 10",

"Rate: Welwitschia - 7",

"Rate: Arnoldii - 3",

"Rate: Woodii - 5",

"Update: Woodii - 5",

"Reset: Arnoldii",

"Exhibition"])