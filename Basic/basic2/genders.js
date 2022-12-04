function solve(input) {
    let age = (input[0]);
    let gender = (input[1]);
    if (gender === "m") {
        if (age < 16) {
            console.log("Master");
        }
        else if (age >= 16) {
            console.log("Mr.")
        }

        }
    if (gender === "f") {
            if (age < 16) {
                console.log("Miss")
            }
            else (
                console.log("Ms.")
            )
    }



}