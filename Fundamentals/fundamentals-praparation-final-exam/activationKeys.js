function activation(array) {
    let key = array.shift();
    let action = array.shift();
    while (action != 'Generate') {
        let command = action.split('>>>')[0];
        switch (command) {
            case 'Contains':
                let substring = action.split('>>>')[1];
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                }
                else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                action = action.split('>>>');
                action.shift();
                const change = action[0];
                let start = Number(action[1]);
                let end = Number(action[2]);
                const part = key.substring(start, end);
                if (change == 'Upper') {
                    let newpart = part.toUpperCase();
                    key = key.replace(part, newpart);
                }
                else {
                    let newpart = part.toLowerCase();
                    key = key.replace(part, newpart);
                }
                console.log(key);
                break;
            case 'Slice':
                action = action.split('>>>');
                let startIndex = Number(action[1]);
                let endIndex = Number(action[2]);
                let firstPart = key.slice(0, startIndex);
                let secondPart = key.slice(endIndex);
                key = firstPart + secondPart;
                console.log(key);
                break;

        }
        action = array.shift();
    }
    console.log(`Your activation key is: ${key}`)
    //     "Contains>>>{substring}":

    // o If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".

    // o Otherwise, prints: "Substring not found!"

    // · "Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":

    // o Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.

    // o All given indexes will be valid.

    // · "Slice>>>{startIndex}>>>{endIndex}":

    // o Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.

    // o Both indices will be valid.
}

activation(["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"])