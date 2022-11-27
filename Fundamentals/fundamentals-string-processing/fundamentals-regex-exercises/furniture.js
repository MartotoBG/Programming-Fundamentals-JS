function filter(array) {
    let newArray = [];
    let index = 0;
    let items = [];
    let totalMoney = 0;
    const pattern = />>(?<name>[A-Z]{1}[A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/g;
    while (array[index] != "Purchase") {
        newArray.push(array[index]);
        index++;
    } 
        for (let i = 0 ; i<newArray.length; i++){
            let productRow = newArray[i];
            let validItem = pattern.exec(productRow);

            while (validItem != null){
                const productName = validItem.groups.name;
                const productPrice = validItem.groups.price;
                const productQuantity = validItem.groups.quantity;
                items.push(productName);
                totalMoney += productPrice * productQuantity;
                validItem = pattern.exec(productRow)
            }
        }
        console.log('Bought furniture:');
        console.log(items.join('\n'));
        console.log(`Total money spend: ${totalMoney.toFixed(2)}`)
    
}

filter(['>>Sofa<<312.23!3',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase'])