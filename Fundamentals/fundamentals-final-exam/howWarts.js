function hog(array) {
    let spell = array.shift();
    let currentLine = array.shift().split(' ');
    let command = currentLine.shift();
    while (command !== 'Abracadabra') {
        switch (command) {
            case 'Abjuration': {
                let newWord = '';
                for (let i = 0; i < spell.length; i++) {

                    newWord += spell[i].toUpperCase();

                }
                spell = newWord;
                console.log(spell);
                break;
            }
            case 'Necromancy': {
                let newWord = '';
                for (let i = 0; i < spell.length; i++) {
                    newWord += spell[i].toLowerCase();
                }
                spell = newWord;
                console.log(spell);
                break;
            }
            case 'Illusion': {
                let index = Number(currentLine.shift());
                let letter = currentLine.shift();
                let oldLetter = spell[index];
                if (spell[index]){
                spell = spell.replace(oldLetter,letter);
                console.log('Done');
                }
                else {
                    console.log('The spell was too weak.');
                }
                break;
            }
            case 'Divination': {
                let firstSubstring = currentLine.shift();
                let secondSubstring = currentLine.shift();
                if (spell.includes(firstSubstring)){
                    let isDone = false;
                    while (isDone !== true){
                        if (spell.includes(firstSubstring)){
                            spell.replace(firstSubstring,secondSubstring);
                        }
                        else {
                            isDone = true;
                        }
                    }   
                    console.log(spell); 
                }
                break;
            }
            case 'Alteration': {
                let substring = currentLine.shift();
                if (spell.includes(substring)){
                let index = Number(spell.indexOf(substring));
                let firstPart = spell.substring(0,index);
                let secondPart = spell.substring(index+substring.length);
                spell = firstPart + secondPart;
                console.log(spell);
                }
                break;
            }
            default : {
                console.log('The spell did not work!');
                break;
            }
        }
        currentLine = array.shift().split(' ');
        command = currentLine.shift();
    }
}

hog(["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"])

