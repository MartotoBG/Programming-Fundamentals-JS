function cardHand(arr) {
    const players = new Map(); // playerName => set of player cards
    const power = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    const multiplier = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };
 
    for (const entry of arr) {
        let [name, cards] = entry.split(': ');
 
        if (!players.has(name)) {
            players.set(name, new Set(cards.split(', ')));
        }
        else {
            for (const card of cards.split(', ')) {
                players.get(name).add(card);
            }
        }
    }
 
    const playersPower = new Map(); // playerName => totalPower
 
    [...players.entries()].forEach(([name, cards]) => {
        const score = [...cards].map(x => {
            const {p, m} = x.match(/(?<p>\d+|J|Q|K|A)(?<m>[SHDC])/).groups;
            return power[p] * multiplier[m];
        }).reduce((x, y) => x + y, 0);
 
        playersPower.set(name, score);
    });
 
    [...playersPower.entries()].forEach(([name, pow]) => console.log(`${name}: ${pow}`));
}

cardHand ([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])