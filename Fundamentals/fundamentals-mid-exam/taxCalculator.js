function tax(array) {
    let elements = array.toString();
    let fullArray = elements.slice(0).split(`>>`);
    elements = elements.split(`>>`);
    let vehicle = elements.shift().split(` `);
    let km = vehicle.pop();
    let taxYears = vehicle.pop();
    let tax = 0;
    let totalTax = 0;
    let taxPerKM = 0;
    
    for (let j = 0; j < fullArray.length; j++) {
        vehicle = vehicle.toString();
        if (vehicle == "family" || vehicle == "heavyDuty" || vehicle == "sports") {
            switch (vehicle) {
                case "family": tax = 50
                    for (let i = 0; i < taxYears; i++) {
                        
                        tax -= 5;
                        taxPerKM = Math.floor(km/3000);
                        
                    }
                    if (taxPerKM > 0) {
                        tax += taxPerKM * 12;
                    }
                    console.log(`A ${vehicle} car will pay ${tax.toFixed(2)} euros in taxes.`);
                    totalTax += tax;
                    
                    taxPerKM = 0 ;
                     break;

                case "heavyDuty": tax = 80
                    for (let i = 0; i < taxYears; i++) {
                        
                        tax -= 8;
                        taxPerKM = Math.floor(km/9000);
                        
                    }
                    if (taxPerKM > 0) {
                        tax += taxPerKM * 14;
                    }
                    console.log(`A ${vehicle} car will pay ${tax.toFixed(2)} euros in taxes.`);
                    totalTax += tax;
                    taxPerKM = 0;
                     break;

                case "sports": tax = 100
                    for (let i = 0; i < taxYears; i++) {
                        
                        tax -= 9;
                        taxPerKM = Math.floor(km/2000);
                        

                    } 
                    if (taxPerKM > 0) {
                        tax += taxPerKM * 18;
                    }
                    console.log(`A ${vehicle} car will pay ${tax.toFixed(2)} euros in taxes.`);
                    totalTax += tax;
                    taxPerKM = 0;
                    ; break;
            }
        }
        else {
            console.log(`Invalid car type.`)
        }
        if (j == fullArray.length -1){
            break;
        }
        vehicle = elements.shift().split(` `);
        km = vehicle.pop();
        taxYears = vehicle.pop();
    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`)
}

tax(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"])