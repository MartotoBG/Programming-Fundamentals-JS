function findID(input) {

    let result = {};

    input.forEach(line => {

        let [companyName, personID] = line.split(` -> `);
        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }
        result[companyName].push(personID);

    });

    let sortedCompanies = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));


    sortedCompanies.forEach(el => {
        const companyName = el[0];

        const allIds = el[1];

        console.log(companyName);
       
       let uniqueIDs = new Set(allIds);
       
       for (const id of uniqueIDs){
        console.log(`-- ${id}`)
       }
    })
    
}

findID(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'])