function list(array) {
    let guestsArray = [];
    for (const el of array){

        let command = el.split(` `);
        let name = command[0];
        if (command.length === 3){
            if(guestsArray.includes(name)){
                console.log(`${name} is already in the list!`);
               
            }
            else {
                guestsArray.push(name);
                
            }
        }
        else {
            if (guestsArray.includes(name)){
                let index = guestsArray.indexOf(name);
                guestsArray.splice(index,1);
                
            }
            else {
                console.log(`${name} is not in the list!`);
                
            }
        }
    }
    for (const elements of guestsArray){
        console.log(elements)
    }
}

list(['Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!'])