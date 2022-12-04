function solve (input) {
    let index = 0;
    let command = input[index];
    index++
    while (command !== "End"){
        let destination = command;
        let budget = Number(input[index]);
        index++;
        let sum = 0;
        while (sum < budget){
            let money = Number(input[index]);
            index++
            sum += money;
        }
        console.log (`Going to ${destination}!`)
        command = input[index];
        index++
        }
    }