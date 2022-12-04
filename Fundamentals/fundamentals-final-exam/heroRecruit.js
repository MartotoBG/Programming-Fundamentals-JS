function recruit(array){
    let currentLine = array.shift().split(' ');
    let command = currentLine.shift();
    let heroes = {};
    while (command !=='End'){
        switch(command){
            case'Enroll': {
                let name = currentLine.shift();
                if (heroes[name]){
                    console.log(`${name} is already enrolled.`);
                }
                else {
                heroes[name] = [];
                }
                break;
            }
            case'Learn':{
                let name = currentLine.shift();
                let spell = currentLine.shift();
                if (heroes[name]){
                    if (heroes[name].spells){
                        if (heroes[name].spells.includes(spell)){
                            console.log(`${name} has already learnt ${spell}.`)
                        }
                        else {
                        heroes[name].spells.push(spell);
                        }
                    }
                    else {
                    heroes[name].spells = [];
                    heroes[name].spells.push(spell);
                    }
                    
                }
                else {
                    console.log(`${name} doesn't exist`);
                }
                break;
            }
            case'Unlearn': {
                let name = currentLine.shift();
                let spell = currentLine.shift();
                if (heroes[name]){
                    if (heroes[name].spells.includes(spell)){
                        let index = heroes[name].spells.indexOf(spell);
                        heroes[name].spells.splice(index,1);
                    }
                    else {
                        console.log(`${name} doesn't know ${spell}.`);
                    }
                }
                else {
                    console.log(`${name} doesn't exist.`);
                }
                break;
            }
        }
        currentLine = array.shift().split(' ');
        command = currentLine.shift();
    }
    let entries = Object.entries(heroes);
    console.log('Heroes:');
    for(let entry of entries){
        let name = entry[0];
        let spell = entry[1].spells;
        if (spell){
        let length = spell.length;
        if (length>0){
        console.log(`== ${name}: ${spell.join(', ')}`);
        }
        
        else {
            console.log(`== ${name}:`);
        }
        }
        else {
            console.log(`== ${name}:`);
        }
    }
}

recruit(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"])