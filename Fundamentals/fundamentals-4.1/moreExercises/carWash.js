function wash (commands){
    let percent = 0;
    let length = commands.length;
    for (let i =0; i<length; i++){
            switch (commands[i]){
        case "soap" : percent+=10; break;
        case "vacuum cleaner" : percent += percent * 0.25; break;
        case "water" : percent+= percent * 0.2; break;
        case "mud" : percent -= percent*0.1;;
    }
    }

    console.log(`The car is ${percent.toFixed(2)}% clean.`);

}


wash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water'])



//     · soap – add 10 to the value

// · water – increase the value by 20%

// · vacuum cleaner – increase the value by 25%

// · mud – decrease the value by 10%

// `The car is {value}% clean.`