function dictionary(array) {

    const keys = [];

    array.forEach(element => {
       element = JSON.parse(element);
       array[element] == element;
       keys.push(Object.keys(element)[0]);
       
    })
    for (let i = 0 ; i<keys.length; i++){
        for(let j = i+1 ; j<keys.length;j++){
            if(keys[i] == keys[j]){
                array.splice(i,1);
            }
        }
    }
    array.sort((a,b) => a.Object.keys - b.Object.keys)
     array.forEach(element => {
         element = JSON.parse(element);
         console.log(`Term: ${Object.keys(element)} => Definition ${Object.values(element)}`);
     })
   
    
}

dictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

])