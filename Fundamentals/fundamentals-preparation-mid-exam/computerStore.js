function store (array){
    const type = array.pop();
    let sum = 0;
    let initialSum = 0;
    let taxes = 0;
    for (let part of array){
        part = Number(part);
        if (part < 0){
            console.log('Invalid price!');
            part = 0;
        }
        else {
            initialSum += part;
                   
            if (type == 'special'){
                taxes += part * 0.2;
                part *= 1.2; 

                part *= 0.9;
               
            }
            else {
                taxes += part * 0.2;
                part *= 1.2; 
            }
            sum += part;
        }
        
    }
    if (!sum == 0){
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${(initialSum).toFixed(2)}$
    Taxes: ${(taxes).toFixed(2)}$
    -----------
    Total price: ${(sum).toFixed(2)}$
    `)
    }
    else {
        console.log('Invalid order!');
    }
}

store ([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    