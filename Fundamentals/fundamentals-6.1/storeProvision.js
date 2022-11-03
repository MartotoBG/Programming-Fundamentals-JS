function store (current, ordered){
    for (let i = 0; i< current.length; i+=2){
        for (let j = 0 ; j<ordered.length; j+=2){
            if(current[i] == ordered[j]){
                current[i+1] = Number(current[i+1]);
                current[i+1] += Number(ordered[j+1]);
                ordered.splice(j,2);
                j = -2
            }
        }
    }
    
    for (let i = 0; i< current.length; i+=2){
    let currentObject = {
        product: current[i],
        quantity: Number(current[i+1]),
    }
        console.log(`${currentObject.product} -> ${currentObject.quantity}`)
    }

    for (let i = 0; i< ordered.length; i+=2){
        let orderedObject = {
            product: ordered[i],
            quantity: Number(ordered[i+1]),
        }
            console.log(`${orderedObject.product} -> ${orderedObject.quantity}`)
        }
}

store ([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])