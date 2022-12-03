function modify(array) {
    let numbers = array.shift().split(' ');
    let copy = numbers.slice();
    let currentLine = array.shift().split(' ');
    let command = currentLine.shift();
    while (command !== 'end') {
        switch (command) {
            case 'swap': {
                const firstIndex = Number(currentLine.shift());
                const secondIndex = Number(currentLine.shift());
                const firstElement = numbers[firstIndex];
                let secondElement = numbers[secondIndex];
                numbers.splice(firstIndex, 1, secondElement);
                numbers.splice(secondIndex, 1, firstElement);
            }
                break;
            case 'multiply': {
                const firstIndex = Number(currentLine.shift());
                const secondIndex = Number(currentLine.shift());
                const multiply = Number(numbers[firstIndex]) * Number(numbers[secondIndex]);
                numbers.splice(firstIndex, 1, multiply);
                break;
            }
            case 'decrease': {
                for(let i = 0; i<numbers.length; i++){
                    numbers[i] -= 1;
                }
                break;
            }
        }
        currentLine = array.shift().split(' ');
        command = currentLine.shift();
    }
    console.log(numbers.join(', '))
}

modify([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)