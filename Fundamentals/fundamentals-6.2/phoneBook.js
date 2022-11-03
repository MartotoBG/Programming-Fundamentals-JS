function phoneNumber (array){
    const persons = [];
    const numbers = [];
    array.forEach(element => {
        const currentPerson = element.split(` `);
        const [name, number] = currentPerson; 
        const personInfo = {
            name : name,
            number : number,
         }
         const replace = persons.indexOf(name);
         if (replace > -1){
            numbers[replace] = number;
         }
         else {
            persons.push(name);
            numbers.push(number);
         }
    });
    const information = [];
    for (let i = 0; i<persons.length; i++){
        information.push(persons[i],numbers[i]);
    }
    for (let i = 0 ; i< information.length; i+=2){
        console.log(`${information[i]} -> ${information[i+1]}`)
    }
}

phoneNumber(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])