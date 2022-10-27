function payback (priceRatings, entryPoint, cheapOrExpensive){
    let rigth = priceRatings.splice(entryPoint+1);
    let left = priceRatings.splice(0,entryPoint);
    let sumOfTheLeft = 0;
    let sumOfTheRight = 0;
    if (cheapOrExpensive == "cheap"){
        for (let i = 0; i < rigth.length;i++){
            if(priceRatings[0]>rigth[i]){
                sumOfTheRight += rigth[i];
            }
        }
        for (let i = 0; i < left.length;i++){
            if(priceRatings[0]> left[i]){
                sumOfTheLeft += left[i];
            }
        }
        
    }
    else {
        for (let i = 0; i < left.length;i++){
            if(priceRatings[0]<=left[i]){
                sumOfTheLeft += left[i];
            }
        }
        for (let i = 0; i < rigth.length;i++){
            if(priceRatings[0]<=rigth[i]){
                sumOfTheRight += rigth[i];
            }
        }
    }
    if (sumOfTheLeft>= sumOfTheRight){
        console.log(`Left - ${sumOfTheLeft}`);
    }
    else {
        console.log(`Right - ${sumOfTheRight}`)
    }
}
payback([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],7,"expensive");