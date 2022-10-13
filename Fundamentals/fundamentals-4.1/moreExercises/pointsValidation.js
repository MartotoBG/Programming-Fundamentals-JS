function validation(coordinates) {
    let fistCoordinates = (coordinates[0] * coordinates[0]) + (coordinates[1] * coordinates[1]);
    if (fistCoordinates > 0) {
        fistCoordinates = Math.sqrt(fistCoordinates);

    }
    else {
        fistCoordinates = fistCoordinates * -1;
        fistCoordinates = Math.sqrt(fistCoordinates);
        
    }
    if (Number.isInteger(fistCoordinates)) {
        console.log(`{${coordinates[0]}, ${coordinates[1]}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${coordinates[0]}, ${coordinates[1]}} to {0, 0} is invalid`);
    }

    let secondCoordinates = (coordinates[2] * coordinates[2]) + (coordinates[3] * coordinates[3]);

    if (secondCoordinates > 0) {
        secondCoordinates = Math.sqrt(secondCoordinates);

    }
    else {
        secondCoordinates = secondCoordinates * -1;
        secondCoordinates = Math.sqrt(secondCoordinates);
    }
    if (Number.isInteger(secondCoordinates)) {
        console.log(`{${coordinates[2]}, ${coordinates[3]}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${coordinates[2]}, ${coordinates[3]}} to {0, 0} is invalid`);
    }

    let thirdCoordinates = (coordinates[2] * coordinates[2] + coordinates[0] * coordinates[0] - 2 * coordinates[0] * coordinates[2]) * (coordinates[3] * coordinates[3] + coordinates[1] * coordinates[1] - 2 * coordinates[3] * coordinates[1]);

    if (thirdCoordinates > 0) {
        thirdCoordinates = Math.sqrt(thirdCoordinates);

    }
    else {
        thirdCoordinates = thirdCoordinates * -1;
        thirdCoordinates = Math.sqrt(thirdCoordinates);
    }
    if (Number.isInteger(thirdCoordinates)) {
        console.log(`{${coordinates[0]}, ${coordinates[1]}} to {${coordinates[2]}, ${coordinates[3]}} is valid`);
    }
    else {
        console.log(`{${coordinates[0]}, ${coordinates[1]}} to {${coordinates[2]}, ${coordinates[3]}} is invalid`);
    }
}

validation([-2, -1, -1, 0]);

//x1 y1 x2 y2

//Math.sqrt(x2 * x2 + x1 * x1 - 2*x1*x2) + (y2 * y2 + y1 * y1 - 2*y1*y2)