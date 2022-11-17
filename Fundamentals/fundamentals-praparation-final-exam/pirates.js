function pirate(array) {
    let action = array.shift().split('||');
    const map = {};
    while (action[0] != 'Sail') {
        const [townName, population, gold] = action;
        if (map[townName]){
            map[townName][0] += Number(population);
            map[townName][1] += Number(gold);
        }
        else {
        map[townName] = [];
        map[townName].push(Number(population));
        map[townName].push(Number(gold));
        }
        action = array.shift().split('||');
    }
    action = array.shift().split('=>');

    while (action[0] !== 'End') {
        
        switch (action[0]) {
            case 'Plunder':
                let [command, townName, population, gold] = action;
                gold = Number(gold);
                map[townName][1] -= gold;
                map[townName][0] -= population;
                if (map[townName][1] <= 0 || map[townName][0] <= 0) {
                    console.log(`${townName} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                    console.log(`${townName} has been wiped off the map!`);
                    delete map[townName];
                }
                else {
                    console.log(`${townName} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                }; break;

            case 'Prosper': 
                let [currentCommand, currentTownName, currentGold] = action;
                currentGold = Number(currentGold);
                if (currentGold<0){
                    console.log('Gold added cannot be a negative number!');
                    break;
                }
                else {
                    map[currentTownName][1] += currentGold
                    console.log(`${currentGold} gold added to the city treasury. ${currentTownName} now has ${map[currentTownName][1]} gold.`)
                }
        }
        action = array.shift().split('=>');
    }
        const length = Object.keys(map).length;
        if (length <= 0){
            console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
        }
        else {
            console.log(`Ahoy, Captain! There are ${length} wealthy settlements to go to:`);
            const entries = Object.entries(map);
            for (const entry of entries){
                const name = entry.shift();
                const population = entry[0][0];
                const gold = entry[0][1];
                console.log(`${name} -> Population: ${population} citizens, Gold: ${gold} kg`)
            }
        }
}

pirate((["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"]))

//"Plunder=>{town}=>{people}=>{gold}"

// o You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold.

// o For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."

// o If any of those two values (population or gold) reaches zero, the town is disbanded.

// § You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"

// o There will be no case of receiving more people or gold than there is in the city.

// · "Prosper=>{town}=>{gold}"

// o There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.

// o The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.

// o If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message:

// "{gold added} gold added to the city treasury. {town} now has {total gold} gold."