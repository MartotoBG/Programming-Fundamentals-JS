function organize(array) {
    const numberOfPieces = Number(array.shift());
    const pieces = {};
    for (let i = 0; i < numberOfPieces; i++) {
        const pieceName = array[i].split('|')[0];
        const composer = array[i].split('|')[1];
        const key = array[i].split('|')[2];
        pieces[pieceName] = {
            composer: composer,
            key: key,
        }
    }
    for (let i = 0; i < numberOfPieces; i++) {
        array.shift();
    }
    let action = array.shift().split('|');
    let command = action.shift();
    while (command !== 'Stop') {
        switch (command) {
            case 'Add': {


                const piece = action[0];
                const composerName = action[1];
                const pieceKey = action[2];
                if (pieces[piece]) {
                    console.log(`${piece} is already in the collection!`);
                }
                else {
                    pieces[piece] = {
                        composer: composerName,
                        key: pieceKey,
                    }
                    console.log(`${piece} by ${composerName} in ${pieceKey} added to the collection!`);
                }
                break;
            }
            case 'Remove': {
                const piece = action;
                if (pieces[piece]) {
                    delete pieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            }
            case 'ChangeKey': {

                const piece = action[0];
                const pieceKey = action[1];
                if (pieces[piece]) {
                    pieces[piece] = {
                        composer: pieces[piece]['composer'],
                        key: pieceKey,
                    }
                    console.log(`Changed the key of ${piece} to ${pieceKey}!`);
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
            }
        }
        action = array.shift().split('|');
        command = action.shift();
    }
    const entries = Object.entries(pieces);
    for (const entry of entries) {
        const piece = entry[0];
        const singer = entry[1]['composer'];
        const pieceKey = entry[1]['key'];
        console.log(`${piece} -> Composer: ${singer}, Key: ${pieceKey}`);
    }
}

organize([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)