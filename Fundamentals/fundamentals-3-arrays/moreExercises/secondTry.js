function commandsForGames(commands) {
    let length = commands.length;
    let games = commands[0];
    let gamesArray = games.split(` `);
    let gamesArrayLength = gamesArray.length;
    // console.log(gamesArray);
    let array = [];
    let installed = false;
    let updatedGame = [];
    let count = 0;


    for (let i = 0; i < length - 1; i++) {
        array = commands[i + 1].split(` `);
        switch (array[0]) {
            case 'Install':

                for (let j = 0; j < gamesArrayLength; j++) {
                    if (array[1] == gamesArray[j]) {
                        installed = true;
                        break;
                    }
                    else if (installed == false && j == gamesArrayLength - 1) {
                        gamesArray.push(array[i + 1]);
                        break;
                    }

                }
                installed = false;
                break;

            case 'Uninstall':

                for (let j = 0; j < gamesArrayLength; j++) {
                    if (array[1] == gamesArray[j]) {
                        installed = true;
                    }
                    if (installed == true) {
                        gamesArray.splice(j, 1);
                        break;
                    }

                }
                installed = false;
                break;

            case 'Update':
                for (let j = 0; j < gamesArrayLength; j++) {
                    if (array[1] == gamesArray[j]) {
                        installed = true;
                    }

                    if (installed == true) {
                        updatedGame = gamesArray[j];
                        gamesArray.splice(j, 1);
                        gamesArray.push(updatedGame);
                        break;
                    }
                }
                updatedGame = [];
                break;
            case 'Expansion':
                for (let j = 0; j < gamesArrayLength; j++) {       //izbroqva igrite
                    if (array[1].includes(gamesArray[j])) {
                        updatedGame.push(gamesArray[j]);
                        updatedGame.push(array[1]);
                        count++;
                        break;
                    }
                    else {
                        updatedGame.push(gamesArray[j]);
                        count++;
                    }
                }
                gamesArray.splice(0, count);

                break;

            case 'Play!': break;

        }

    }
    let result = updatedGame.concat(gamesArray);
    let resultAsATaext = ``;
    for (let x = 0; x < result.length; x++) {
        resultAsATaext += result[x] + ` `;
    }
    console.log(resultAsATaext.replace('-', ':'));

}



//     · Install {game} - add the game at the last position in the account, but only if it isn't installed already.

//     · Uninstall {game} - delete the game if it exists.

//     · Update {game} - update the game if it exists and place it in the last position.

//     · Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: 
//"{game}:{expansion}";

commandsForGames([

    'Spiderman CS WoW Diablo EuroTruck', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Install Spiderman','Install MinecraftPro', 'Play!']);