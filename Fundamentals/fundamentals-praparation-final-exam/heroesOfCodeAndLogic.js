function hero(array) {
    let numberOfHeroes = Number(array.shift());
    const maxHp = 100;
    const maxMana = 200;
    let heroesObject = {};
    for (let i = 0; i< numberOfHeroes; i++){
        let currentHero = array.shift().split(" ");
        let name = currentHero.shift();
        let hp = Number(currentHero.shift()); 
        let mana = Number(currentHero.shift()); 
            if (hp > 100){
                hp = 100;
            }
            if (mana > 200){
                mana = 200;
            }
        heroesObject[name] = {
            hp: Number(hp),
            mana: Number(mana)
        }
    }
    let currentLine = array.shift().split(' - ');
    let command = currentLine.shift();
    
     while (command !== 'End'){
        switch(command){
            case 'CastSpell' : {
                const currentHero = currentLine.shift();
                const needMana = Number(currentLine.shift());
                const spellName = currentLine.shift();
                if (heroesObject[currentHero].mana>=needMana){
                    heroesObject[currentHero].mana -= needMana;
                    console.log(`${currentHero} has successfully cast ${spellName} and now has ${heroesObject[currentHero].mana} MP!`)
                }
                else {
                    console.log(`${currentHero} does not have enough MP to cast ${spellName}!`)
                }
                break;
            }
            case 'TakeDamage' : {
                const currentHero = currentLine.shift();
                const damage = Number(currentLine.shift());
                const attacker = currentLine.shift();
                heroesObject[currentHero].hp -= damage;
                
                if (heroesObject[currentHero].hp<=0){
                    console.log(`${currentHero} has been killed by ${attacker}!`);
                    delete heroesObject[currentHero];
                }
                else {
                    console.log(`${currentHero} was hit for ${damage} HP by ${attacker} and now has ${heroesObject[currentHero].hp} HP left!`);
                }
                break;
            }
            case 'Recharge' : {
                const currentHero = currentLine.shift();
                let increase = Number(currentLine.shift());
                heroesObject[currentHero].mana += increase;
                if (heroesObject[currentHero].mana >200){
                    let difference = heroesObject[currentHero].mana - 200;
                    increase -=difference;
                    heroesObject[currentHero].mana = 200;
                }
                console.log(`${currentHero} recharged for ${increase} MP!`) // vuzmojen problem
                
                break;
            }
            case 'Heal' : {
                const currentHero = currentLine.shift();
                let increase = Number(currentLine.shift());
                heroesObject[currentHero].hp += increase;
                if ( heroesObject[currentHero].hp >100){
                    let difference = heroesObject[currentHero].hp - 100;
                    increase -=difference;
                    heroesObject[currentHero].hp = 100;
                }
                console.log(`${currentHero} healed for ${increase} HP!`);
            }
        }
        currentLine = array.shift().split(' - ');
        command = currentLine.shift();
     }
     const entries = Object.entries(heroesObject);
     for (const entry of entries){
        console.log(entry[0]);
        console.log(`  HP: ${entry[1].hp}`);
        console.log(`  MP: ${entry[1].mana}`);
     }
}

hero(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])