function order (product, quantity){
    function calculate(product,quantity){
        let price = 0;
        switch (product){
            case "coffee" : price = quantity * 1.5; break;

            case "coke" :   price = quantity * 1.4; break;

            case "water" :  price = quantity; break;

            case "snacks" : price = quantity * 2; break;

        }
        return price;
    }
    const bill = calculate(product,quantity);
    console.log(bill.toFixed(2));
}
order ("water",3)
// · coffee - 1.50

// · water - 1.00

// · coke - 1.40

// · snacks - 2.00