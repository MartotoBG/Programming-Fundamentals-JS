function inventory (array){

    let fighters = [];
    
    array.forEach(fighter => {
        fighter= fighter.split(` / `);
        let name = fighter.shift();
        let level = fighter.shift();
        let items = fighter.slice(0);
        fighters.name = name;
        fighters.level = level;
        fighters.items = items
        
        

    });
    
    fighters.forEach(fighter => {
        console.log(`Hero: ${fighter.name}`);
        console.log(`level => ${fighter.level}`);
        console.log(`Items => ${fighter.items}`)
    })
    // fighters.forEach(element => {
    //     console.log(`Hero: ${gladiator.name}`);
    //     console.log(`level => ${gladiator.level}`);
    //     console.log(`Items => ${gladiator.items}`)
    // })


    //Hero: {heroName}

//level => {heroLevel}

//Items => {item1}, {item2}, {item3}
}

inventory ([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])