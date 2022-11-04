function bookAddress (array){
    class Info {
        constructor (name,address){
            this.name = name,
            this.address = address
        }
    }
    const names = [];
    const addresses = [];
    array.forEach(element => {
        const [name,address] = element.split(`:`);
        const information = {
            name : name,
            address : address,
        }
        const isProblem = names.indexOf(name);
        if (isProblem > -1){
            addresses[isProblem] = information.address;
        }
        else {
            names.push(name);
            addresses.push(address);
        }
    });
    const book = [];
    for (let i = 0 ; i<names.length; i++){
        book.push(new Info (names[i], addresses[i]));
    }
    book.sort((a,b) => a.name.localeCompare(b.name));
    book.forEach(element => {
        console.log(`${element.name} -> ${element.address}`)
    })
}

bookAddress (['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])