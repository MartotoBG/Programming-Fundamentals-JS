function timeLeft (array){
    const pattern = /(?<symbol>[#]|[\|])(?<item>[A-Za-z ]+)\k<symbol>(?<expirationDate>\d{2}\/\d{2}\/\d{2})\k<symbol>(?<calories>\d+)\k<symbol>/g;
    
    const text = array.shift();
    const matches = text.matchAll(pattern);
    const length = matches.length;
    //"You have food to last you for: {days} days!"

    //· The output for each food item should look like this: "Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"
    let daysLeft = 0;
    for (const match of matches){
         let calories = match.groups.calories;
         daysLeft += Number(calories);
    }
    daysLeft = Math.floor(daysLeft/2000);

    console.log(`You have food to last you for: ${daysLeft} days!`);

    const secondMatches = text.matchAll(pattern);

    for (const match of secondMatches){
         let calories = match.groups.calories;
         const item = match.groups.item;
         const date = match.groups.expirationDate;
         console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }
}

timeLeft(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])