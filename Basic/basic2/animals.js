function solve(input) {
    let day = (input[0]);
    switch (day) {
        case "dog": console.log("mammal"); break;
        case "tortoise":
        case "snake":
        case "crocodile": console.log("reptile"); break;

        default: console.log("unknown"); break;
    }



}