function calculate (array){
    let digits = array.shift().split(` `).map(x => Number(x));
    let actionOfTheArray = array.shift().split(` `);
    let commandOfTheArray = actionOfTheArray.shift();
    while (commandOfTheArray != "Finish"){
        actionOfTheArray[0] = Number(actionOfTheArray[0])
        switch (commandOfTheArray){
            
            case "Add" : digits.push(actionOfTheArray[0]);break;


            case "Remove" : if (digits.includes(actionOfTheArray[0])){
                for (let i = 0; i <digits.length; i++){
                    if(digits[i] == actionOfTheArray[0]){
                        digits.splice(i,1);
                        break;
                    }
                }
            } ;
            break;
            case "Replace" : let replacementDigit = Number(actionOfTheArray[1]);

            if (digits.includes(actionOfTheArray[0])){
                for (let i = 0; i <digits.length; i++){
                    if(digits[i] == actionOfTheArray[0]){
                        digits.splice(i,1,replacementDigit);
                        break;
                    }
                }
            } ;
            break;
            case "Collapse" : for (let i = 0 ; i<digits.length; i++){
                if(actionOfTheArray[0] > digits[i] && i>=0){
                    digits.splice(i,1);
                    i = -1  
                }
                else {

                }
                
            } break;
        }
        actionOfTheArray = array.shift().split(` `);
        commandOfTheArray = actionOfTheArray.shift();
    }

    let result = ``;

    for (let j = 0; j<digits.length; j++){

        result += digits[j] + ` `;

    }
    console.log(result)
}

calculate(["1 15 3 3 3 4 5 5 9 10 7 3 10" , "Add 12", "Remove 3","Replace 3 12","Collapse 12", "Finish"])