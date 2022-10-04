function commandsForGames(commands) {
    let length = commands.length;
    let games = commands[0];
    let gamesArray = games.split(` `);
    let gamesArrayLength = gamesArray.length;
    console.log(gamesArray);
    let installed = false;
    let array = [];
    
    for (let i= 1; i<length;i++){
        array = commands[i].split(` `);

        switch(array[i]){
            case 'Install':
            
            for (let j = 0; j < gamesArrayLength; j++) {

                if (array[i] == gamesArray[j]) {
                    installed = true;
                }
            }
            if (installed == false) {
                gamesArray.push(array[i]);
            }
        }
    } 
    console.log(gamesArray)
}


//     · Install {game} - add the game at the last position in the account, but only if it isn't installed already.

//     · Uninstall {game} - delete the game if it exists.

//     · Update {game} - update the game if it exists and place it in the last position.

//     · Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: 
//"{game}:{expansion}";

commandsForGames([

    'CS WoW Diablo', 'Install LoL', 'Play!']);