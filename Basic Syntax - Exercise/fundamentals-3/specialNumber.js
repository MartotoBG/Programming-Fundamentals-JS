function  specialNumber (number){
    let sum = 0;
    let j = 0;
    for (let i = 1 ; i<=number ; i ++){
        let z = i;
        z = z.toString();
        i = i.toString();
        while (j<z.length){
        
        sum += Number(z[j]);
        j++;
        }

        if (sum ==5 || sum ==7 || sum == 11){
            console.log(`${i} -> True`)
        }
        else {
            console.log(`${i} -> False`)
        }
    
        sum = 0;
        j = 0;
        i = Number(i);
    }
}

specialNumber (15)