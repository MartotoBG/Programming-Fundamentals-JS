function odd (string){
    const array = string.split(` `);
    const elements = {};
    const lowerArray = array.map(w => w.toLowerCase());
    const result = [];
   
    lowerArray.forEach(element => {
        
        if (elements.hasOwnProperty(element)){
            elements[element]++;
        }
        else {
            elements[element] = 1;
        }
    });
    const entries = Object.entries(elements);
    entries.forEach(entry => {
        if (entry[1] % 2 == 1){
            result.push(entry[0]);
        }
    })
    
    
    console.log(result.join(` `))
    
}

odd ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');