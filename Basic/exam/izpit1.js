function solve(input) {
   let maznini = Number(input[0]); 
   let proteini = Number(input[1]); 
   let vuglehidrati = Number(input[2]); 
   let kalorii = Number(input[3]); 
   let voda = Number(input[4]); 
    let maznini1 = ((maznini/100) * kalorii)/9;
    let proteini1 = ((proteini/100) * kalorii)/4;
    let vuglehidrati1 = ((vuglehidrati/100) * kalorii)/4;
    let teglo = maznini1 + proteini1 + vuglehidrati1;
    let gram = kalorii/teglo;
    console.log((((100 - voda)/100)*gram).toFixed(4))
}   



solve ([40,
    40,
    20,
    3000,
    40])