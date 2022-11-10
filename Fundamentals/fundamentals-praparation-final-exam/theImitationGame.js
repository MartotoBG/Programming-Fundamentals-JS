function encrypt(array) {

    let word = array.shift();
    let action = array.shift().split(`|`);

    while (action[0] != "Decode") {

        let command = action.shift();

        switch (command) {

            case "ChangeAll":

                let oldLetters = action[0];

                let newLetters = action[1];

                for (let i = 0; i < word.length; i++) {

                    if (word[i] == oldLetters) {
                        word = word.replace(oldLetters, newLetters);
                    }
                } break;

            case "Insert":
                let index = Number(action[0]);
                let value = action[1];
                word = word.substring(0, index) + value + word.substring(index, word.length);
                break;

            case "Move":
                let moves = action[0];
                word = word.substring(moves, word.length) + word.substring(0, moves);
                break;
        }

        action = array.shift().split(`|`);

    }
    console.log(`The decrypted message is: ${word}`)
    //Decode
    //     Move {number of letters}

    // o Moves the first n letters to the back of the string.

    // · Insert {index} {value}

    // o Inserts the given value before the given index in the string.

    // · ChangeAll {substring} {replacement}

    // o Changes all occurrences of the given substring with the replacement text.
}

encrypt([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

])