function first(array) {

    let password = array.shift();
    if (password == null){
        return;
    }
    password = password.toString();
    // 8 duljina 
    //bukvi golemi malki i _
    // pone 1 glavna bukva i pone 1 malka
    //cifra
    let currentLine = array.shift().split(' ');
    let command = currentLine.shift();
    while (command !== 'Complete') {


        switch (command) {
            case 'Replace': {
                password = password.toString();
                let char = currentLine.shift();
                let replacement = currentLine.shift();
                let ascii = Number(char.charCodeAt()) + Number(replacement);
                let newChar = String.fromCharCode(ascii);
                let isValid = false
                for (let i = 0; i < password.length; i++) {
                    if (password[i] == char) {
                        password = password.replace(char, newChar);
                        isValid = true;
                    }

                }
                if (isValid) {
                    console.log(password);
                }
                break;
            }
            case 'Make': {
                password = password.toString();
                let upperOrLower = currentLine.shift();
                let index = Number(currentLine.shift());
                let firstPart = password.substring(0, index);
                let secondPart = password.substring(index + 1);
                if (upperOrLower == 'Lower' && password[index]) {
                    let newChar = password[index].toLowerCase();
                    password = firstPart + newChar + secondPart;
                    console.log(password);
                }
                else if (upperOrLower = 'Upper' && password[index]) {
                    let newChar = password[index].toUpperCase();
                    password = firstPart + newChar + secondPart;
                    console.log(password);
                }
                break;
            }
            case 'Insert': {
                password = password.toString();
                let index = Number(currentLine.shift());
                let char = currentLine.shift();
                if (password[index]) {
                    let firstPart = password.substring(0, index);
                    let secondPart = password.substring(index);
                    password = firstPart + char + secondPart;
                    console.log(password)
                }
                break;
            }
            case 'Validation': {
                password = password.toString();
                
                if (password.length < 8) {
                    console.log('Password must be at least 8 characters long!');
                }
                for (let i = 0; i < password.length; i++) {
                    let pattern = /\w/g;
                    let match = password.match(pattern);
                    if (match){
                    if (match.length < password.length) {
                        console.log('Password must consist only of letters, digits and _!');
                        break;
                    }
                }
                    if (!match){
                    console.log('Password must consist only of letters, digits and _!');
                    break;
                }

                }
                let isUpper = false;
                let isLower = false;
                let isDigit = false;
                for (let i = 0; i < password.length; i++) {
                    if (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
                        isLower = true;
                    }
                    if (password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90) {
                        isUpper = true
                    }
                    if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
                        isDigit = true;
                    }
                }
                if (!isUpper) {
                    console.log('Password must consist at least one uppercase letter!');
                }
                if (!isLower) {
                    console.log('Password must consist at least one lowercase letter!');
                }
                if (!isDigit) {
                    console.log('Password must consist at least one digit!');
                }

            }
        }
        currentLine = array.shift().split(' ');
        command = currentLine.shift();
    }

}



first(['#',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])
