function party (array){
    let currentGuest = array.shift();
    const VIP = [];
    const regular = [];
    while (currentGuest != "PARTY"){
        let isVIP = isNaN(currentGuest[0]);
        if (isVIP){
            regular.push(currentGuest);
        }
        else {
            VIP.push(currentGuest);
        }
        currentGuest = array.shift();
    }
    
    const allGuests = VIP.concat(regular);
    for (guest of allGuests){
        allGuests.splice(allGuests.indexOf(guest),1);
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => {
        console.log(guest)
    })
}

party (['7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])