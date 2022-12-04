function yard (input) {
    let squaremeter = Number(input[0]);
    let pricemeter = squaremeter * 7.61;
    let discountprice =  pricemeter * 0.18;
    let finalprice = pricemeter - discountprice;
    console.log (`The final price is: ${finalprice} lv.`)
    console.log (`The discount is: ${discountprice} lv.`)
}

yard (["550"])