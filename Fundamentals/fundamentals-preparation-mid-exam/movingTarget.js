function moving(array) {
    let targets = array.shift().split(` `).map(x => Number(x));
    let i = 0;
    let command = array[i];
    let length = targets.length;

    while (command != "End") {
        let commandAsArray = command.split(` `);
        switch (commandAsArray[0]) {
            case "Shoot":
                if (commandAsArray[1] <= length) {
                    let power = Number(commandAsArray[2]);
                    targets[commandAsArray[1]] = Number(targets[commandAsArray[1]]);
                    targets[commandAsArray[1]] -= Number(power);
                }
                if (targets[commandAsArray[1]] <=0){
                    targets.splice(commandAsArray[1],1);
                }; break;
             
            case "Add" : if (commandAsArray[1]<length && commandAsArray[1]>=0){
                let value = Number(commandAsArray[2]);
                targets[commandAsArray[1]] = Number(targets[commandAsArray[1]]);
                targets.splice(commandAsArray[1],0,value);
            }
            else {
                console.log(`Invalid placement!`);
            } ; break;

            case "Strike" : 
            let index = Number(commandAsArray[1]);
            let radius = Number(commandAsArray[2]);
            if (index - radius < 0 || index + radius>=length){
                console.log("Strike missed!")
            }
            else {
                targets.splice(index-radius,2 * radius + 1);
            } break;


            
                
        }
        i++;
        command = array[i];

    }
    console.log(targets.join(`|`))
}
    //console.log(targets)


    //"Shoot {index} {power}"

    // Shoot the target at the index if it exists by reducing its value by the given power (integer value).

    // Remove the target if it is shot. A target is considered shot when its value reaches 0.

    // "Add {index} {value}"

    // Insert a target with the received value at the received index if it exists.

    // If not, print: "Invalid placement!"

    // "Strike {index} {radius}"

    // Remove the target at the given index and the ones before and after it depending on the radius.

    // If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.


moving(["1 2 3 4 500",

"Shoot 4 15",

"End"])