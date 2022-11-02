function list (array){
    for (let i = 0 ; i< array.length; i++){
    let employer = {
        name: array[i],
        personalNumber: array[i].length,
    }
    console.log(`Name: ${employer.name} -- Personal Number: ${employer.personalNumber}`)
}
   //Name: {employeeName} -- Personal Number: {personalNum}
}

list ([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])