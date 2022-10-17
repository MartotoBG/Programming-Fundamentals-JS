function manipulation (array){
let numbers = [array.shift()]
let length = array.length;
let emptyArray = [];
let joined = numbers.join(` `);
let splitted = joined.split(` `);


for (let i = 0; i< length ; i++){
    emptyArray = array[i].split(` `);
    switch (emptyArray[0]) {
        case "Add" : splitted.push(emptyArray[1]); break;
        case "Remove" : 
                        if(splitted.includes(emptyArray[1])){
                            for (let j = 0 ; j<splitted.length ; j++){
                                if(emptyArray[1] == splitted[j]) {
                                    splitted.splice(j,1);
                                }
                            }
                        } ; break;
        case "RemoveAt" : splitted.splice(emptyArray[1],1); break;
        case "Insert" : splitted.splice(emptyArray[2],0,emptyArray[1]); break;
        //4 53 6 43 3
    }
}
console.log(splitted.join(` `))

//  Add {number}: add a number to the end of the array

//  Remove {number}: remove all occurrences of a particular number from the array

//  RemoveAt {index}: removes number at a given index

//  Insert {number} {index}: inserts a number at a given index


}



manipulation 

(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])