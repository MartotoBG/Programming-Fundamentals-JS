function repair (loses , helmetPrice , swordPrice, shieldPrice , armorPrice) {
    let helmets = 0;
    let swords = 0;
    let shields = 0;
    let armors = 0;
    for (let i = 1 ; i<=loses ; i++){
        if(i % 2 == 0) {
            helmets++
        }
    }
    for (let i = 1 ; i<=loses ; i++){
        if(i % 3 == 0) {
            swords++
        }
    }

    for (let i = 1 ; i<=loses ; i++){
        if(i % 3 == 0 && i % 2 == 0) {
            shields++
        }
    }

    for (let i = 1 ; i<=loses ; i++){
        if(i % 12 == 0) {
            armors++
        }
    }
    let expenses = helmets * helmetPrice + swords * swordPrice + shields * shieldPrice + armors * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
    

//      Every second lost game, his helmet is broken.
//  Every third lost game, his sword is broken.
//  When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// Every second time, when his shield brakes, his armor also needs to be repaired.
    //"Gladiator expenses: {expenses} aureus"
}

repair (7, 2, 3, 4, 5)