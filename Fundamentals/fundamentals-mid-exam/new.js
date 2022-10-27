function phoneShop(array) {
    let phones = array.shift()
        phones = phones.split(`, `);
    let actionOfTheArray = array.shift()
    actionOfTheArray = actionOfTheArray.split(` `);
    let commandOfTheArray = actionOfTheArray.shift();
    while (commandOfTheArray != "End") {
        switch (commandOfTheArray) {
            case "Add": if (!phones.includes(actionOfTheArray[1])) {
                phones.push(actionOfTheArray[1]);
            } break;
            case "Remove": if (phones.includes(actionOfTheArray[1])) {
                for (let i = 0; i < phones.length; i++) {
                    if (phones[i] == actionOfTheArray[1]) {
                        phones.splice(i, 1);
                        break;
                    }
                }
            } break;
            case "Bonus": actionOfTheArray.splice(0, 2);
            actionOfTheArray = actionOfTheArray.toString()
            actionOfTheArray = actionOfTheArray.split(`:`);
                for (let i = 0; i < phones.length; i++) {
                    if (phones[i] == actionOfTheArray[0]) {
                        phones.splice(i + 1, 0, actionOfTheArray[1]);
                        break;
                    }
                }
                break;
            case "Last": for (let i = 0; i < phones.length; i++) {
                if (phones[i] == actionOfTheArray[1]) {
                    let last = phones[i];
                    phones.splice(i, 1);
                    phones.push(last);
                }
            } break;
        }
        actionOfTheArray = array.shift().split(` `);
        commandOfTheArray = actionOfTheArray.shift();
    }
    

    let result = ``;
    for (let i = 0 ; i<phones.length; i++) {
        if (i== phones.length-1){
            result+= phones[i];
        }
        else {
        result+= phones[i] + `, `;
        }
    }
    console.log(result)
}
phoneShop (["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End" ])