function paint (array){
    let numbers = array.shift().split(' ');
    for (let i = 0 ; i<numbers.length; i++){
        numbers[i] = Number(numbers[i]);
    }
    let currentLine = array.shift().split(' ');
    let command = currentLine.shift();
    while (command != 'END'){
        switch(command){
            case 'Change': {
                let oldPainting = Number(currentLine.shift());
                let newPainting = Number(currentLine.shift());
                if (numbers.includes(oldPainting)){
                    let index = numbers.indexOf(oldPainting);
                    numbers[index] = newPainting;
                }
                break;
            }
            case 'Hide': {
                let currentPainting = Number(currentLine.shift());
                if (numbers.includes(currentPainting)){
                    let index = numbers.indexOf(currentPainting);
                    numbers.splice(index,1);
                }
                break;
            }
            case 'Switch': {
                let firstPainting = Number(currentLine.shift());
                let secondPainting = Number(currentLine.shift());
                if (numbers.includes(firstPainting) && numbers.includes(secondPainting)){
                    let firstIndex = numbers.indexOf(firstPainting);
                    let secondIndex = numbers.indexOf(secondPainting);
                    numbers[firstIndex] = secondPainting;
                    numbers[secondIndex] = firstPainting;
                }
                break;
            }
            case 'Insert': {
                let index = Number(currentLine.shift());
                let painting = Number(currentLine.shift());
                if (numbers[index]){
                    let firstArray = numbers.slice(0, index+1)
                    let secondArray = numbers.slice(index+1);
                    secondArray.unshift(painting);
                    numbers = firstArray.concat(secondArray);
                }
                break;
            }
            case 'Reverse': {
                numbers.reverse();
            }
        }
        currentLine = array.shift().split(' ');
        command = currentLine.shift();
    }
    console.log(numbers.join(' '));
}

paint (["65 304 97 79 12 659",
"Reverse",
"Change 73 70",
"Insert 10 85",
"END"])


