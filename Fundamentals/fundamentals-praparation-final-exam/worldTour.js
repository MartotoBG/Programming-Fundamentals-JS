function plan(array) {
    let stops = array.shift();
    let currentLine = array.shift().split(':');
    let command = currentLine.shift();
    while (command !== 'Travel') {
        switch (command) {
            case 'Add Stop': {
                let startIndex = Number(currentLine.shift());
                let addString = currentLine.shift();
                if (stops.indexOf(startIndex)) {
                    let firstPart = stops.substring(0, startIndex) + addString;
                    let secondPart = stops.substring(startIndex);
                    stops = firstPart + secondPart;

                }
                console.log(stops);
                break;
            }
            case 'Remove Stop': {
                let startIndex = Number(currentLine.shift());
                let endIndex = Number(currentLine.shift());
                if (stops[startIndex] && stops[endIndex]) {
                    stops = stops.substring(0, startIndex) + stops.substring(endIndex + 1);

                }
                console.log(stops);
                break;
            }
            case 'Switch': {
                let oldString = currentLine.shift();
                let newString = currentLine.shift();
                let regEx = new RegExp(oldString, 'g');
                stops = stops.replace(regEx, newString);
                console.log(stops);

                break;
            }
        }
        currentLine = array.shift().split(':');
        command = currentLine.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}

plan(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
