function solve (array){
    let wagons = array.shift();
    let splitted = wagons.split(` `);
    let splittedLength = splitted.length;
    let maxCapacity = array.shift();
    let length = array.length;
    // console.log(splitted);
    // console.log(maxCapacity)
    // console.log(array);
    for (let i = 0 ; i < length ; i++){
        if (array[i].includes("Add")){
           let add = array[i].split(` `);
           splitted.push(add[1]);
           splittedLength++;
        }
        else {
            array[i] = Number(array[i]);
            for (let j = 0 ; j < splittedLength; j++){
                splitted[j] = Number(splitted[j]);
                if(splitted[j] + array[i] <= maxCapacity){
                    splitted[j] += array[i];
                    break;
                }
            }
        }
    }
    
    console.log(splitted.join(` `));
}

solve (['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])