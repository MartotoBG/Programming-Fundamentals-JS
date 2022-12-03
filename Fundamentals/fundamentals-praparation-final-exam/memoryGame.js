function memory(array) {
    let copy = array[0].slice().split(' ');
    let elements = array.shift().split(' ');
    let numbers = array.shift();
    let firstNumber = 0;
    let secondNumber = 0;
    let moves = 1;
    let length = elements.length;
    while (numbers != 'end') {

        firstNumber = Number(numbers.split(' ').shift());
        secondNumber = Number(numbers.split(' ').pop());
        if (firstNumber == secondNumber || !elements[firstNumber] || !elements[secondNumber]){
            console.log('Invalid input! Adding additional elements to the board');
            length = elements.length;
            elements.splice(length/2,0,`-${moves}a`,`-${moves}a`);
            
        }
        else if (elements[firstNumber] == elements[secondNumber]) {
            console.log(`Congrats! You have found matching elements - ${elements[firstNumber]}!`);
            if (firstNumber > secondNumber){
            elements.splice(firstNumber,1);
            elements.splice(secondNumber,1);
            }
            else {
                elements.splice(secondNumber,1);
                elements.splice(firstNumber,1);
                if (elements.length == 0){
              console.log(`You have won in ${moves} turns!`);
              return;
                }
            }
        }
        else {
            console.log('Try again!');
        }
        
        moves ++;
        numbers = array.shift();
    }
    
    
        console.log('Sorry you lose :(');
        console.log(`${elements.join(' ')}`);
    
}

memory([
    'a 2 4 a 2 4',
    '0 3',
    '0 2',
    '0 1',
    '0 1',
    'end'
])