function list (array) {

    let products = array.shift().split(`!`); // masiv ot produktite
    let i = 0;
    let command = array[i]; // string na komandata
    
    while (command != "Go Shopping!"){
        let commandAsArray = command.split(` `);
        switch (commandAsArray[0]){
            case "Urgent" : if (products.includes(commandAsArray[1])){

            }
                else {
                    products.unshift(commandAsArray[1]);
                }; break;
            
            case "Unnecessary" : if (products.includes(commandAsArray[1])){
                let index = products.indexOf(commandAsArray[1]);
                products.splice(index,1);
            }
            ; break;
        case "Correct" : if (products.includes(commandAsArray[1])){
            let oldItem = products.indexOf(commandAsArray[1]);
            let newItem = commandAsArray[2];
            products.splice(oldItem,1,newItem);
        }; break;
        
        case "Rearrange" : 
            if (products.includes(commandAsArray[1])){
                let index = products.indexOf(commandAsArray[1]);
                products.splice(index,1);
                products.push(commandAsArray[1]);
        }; break;
            
        }
        i++;
        command = array[i];
    }
    console.log(products.join(`, `));


                //     · "Urgent {item}" - add the item at the start of the list. 
            //     If the item already exists, skip this command.

            // · "Unnecessary {item}" - remove the item with the given name, 
            // only if it exists in the list. Otherwise, skip this command.

            // · "Correct {oldItem} {newItem}" - if the item with the given old name exists, 
            // change its name with the new one. Otherwise, skip this command.

            // · "Rearrange {item}" - if the grocery exists in the list, remove it from its current position 
            // and add it at the end of the list. Otherwise, skip this command.


}
list (["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion","Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])