function pet (input) {
    let dog = Number(input[0]);
    let cat = Number(input[1]);
    let dogprice = dog * 2.5;
    let catprice = cat * 4;
    let finalprice = dogprice + catprice;
    console.log (`${finalprice}`);
}

pet (["13","9"])