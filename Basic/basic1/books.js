function books (input) {
    let book = Number(input[0]);
    let sheetsbyhour = Number(input[1]);
    let days = Number(input[2]);
    let hours = (book / sheetsbyhour) / days;
    console.log (hours) 
}

books (["432","15","4"])