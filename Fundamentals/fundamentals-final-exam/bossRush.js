function rush (array){
    let pattern = /\|{1}(?<boss>[A-Z]{4,})\|:{1}#{1}(?<title>[a-zA-z]+ [a-zA-Z]+)#{1}/g
    let number = Number(array.shift());
    let bosses = {};
    for (let i = 0 ; i<number; i++){
        let match = pattern.exec(array[i])
        if (match){
            let strength = match.groups['boss'].length;
            let armor = match.groups['title'].length;
            let name =  match.groups['boss'];
            let title =  match.groups['title']
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        }
        else {
            console.log('Access denied!');
        }
        match = pattern.exec(array[i])
        
    }
}

rush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
