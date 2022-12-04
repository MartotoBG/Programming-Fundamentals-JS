function calculator (input) {
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let interestrate = Number(input[2]);

    let total = deposit + months*((deposit*(interestrate/100)/12))
    console.log (total);
}
calculator (["1000","3","5"])