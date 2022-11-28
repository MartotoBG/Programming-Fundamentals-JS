function income (array){
    const pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9]+[\.]*[0-9]+)\$/g;
    let currentCustomer = array.shift();
    let sum = 0;
    while (currentCustomer !== 'end of shift'){
       let currentData = pattern.exec(currentCustomer);
       
       if (currentData){
        const currentName = currentData.groups.name;
        const currentProduct = currentData.groups.product;
        const currentCount = Number(currentData.groups.count);
        const currentPrice = Number(currentData.groups.price);
        const totalPrice = currentCount * currentPrice;
        sum += currentCount * currentPrice;
        console.log(`${currentName}: ${currentProduct} - ${totalPrice.toFixed(2)}`);
       }
       currentCustomer = array.shift();
       currentData = pattern.exec(currentCustomer);
    }
    console.log(`Total income: ${sum.toFixed(2)}`)
}

income (['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])