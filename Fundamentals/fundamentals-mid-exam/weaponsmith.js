function weaponsmith(array) {
    let weaponName = array.shift().split('|');
    let currentLine = array.shift().split(' ');
    let command = currentLine.shift();
    while (command != 'Done') {
        switch (command) {
            case 'Add': {
                let addPart = currentLine.shift();
                let index = Number(currentLine.shift());
                if (weaponName[index]) {
                    let firstArray = weaponName.slice(0, index)
                    let secondArray = weaponName.slice(index);
                    secondArray.unshift(addPart);
                    weaponName = firstArray.concat(secondArray);
                }
                break;
            }
            case 'Remove': {
                let index = Number(currentLine.shift());
                if (weaponName[index]) {
                    weaponName.splice(index, 1);
                }
                break;
            }
            case 'Check': {
                let newArray = [];
                if (currentLine[0] == 'Even') {
                    for (let i = 0; i < weaponName.length; i += 2) {
                        newArray.push(weaponName[i]);
                    }
                }
                else if (currentLine[0] == 'Odd') {
                    for (let i = 1; i < weaponName.length; i += 2) {
                        newArray.push(weaponName[i]);
                    }
                }
                console.log(newArray.join(' '));
                break;
            }

        }
        currentLine = array.shift().split(' ');
        command = currentLine.shift();
    }
    console.log(`You crafted ${weaponName.join('')}!`);
}

weaponsmith(["Ta|es|to|la|ch",
"Add pa 8",
"Add ha 2",
"Remove 3",
"Done"])


