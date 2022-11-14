function again (array){
    const object = {};
    array.forEach(person => {
        const length = person.length;
        object[person] = length;
    });
    for(const person in object){
        console.log(`Name: ${person} -- Personal Number: ${object[person]}`)
    }
    //Name: {employeeName} -- Personal Number: {personalNum}
}

again([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])