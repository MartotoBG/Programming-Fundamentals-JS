function triple(number) {
    let letter = String.fromCharCode(97)
    let firstLetter = ``;
    let secondLetter = ``;
    let thirdLetter = ``;
    let triple = ``;

    for (let i = 0; i < number; i++) {
        firstLetter = String.fromCharCode(97 + i)
        triple += firstLetter;

        for (let j = 0; j < number; j++) {
            secondLetter = String.fromCharCode(97 + j);
            triple += secondLetter;

            for (let z = 0; z < number; z++) {
                thirdLetter = String.fromCharCode(97 + z)
                triple += thirdLetter;
                console.log(triple);
                triple = firstLetter + secondLetter;
            }
            triple = firstLetter;
        }
        triple = ``;

    }
}
triple(3)