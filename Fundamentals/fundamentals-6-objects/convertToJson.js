function convert (first, last, hair){
    let info = {
        name : first,
        lastName : last,
        hairColor : hair,
    }
    console.log(JSON.stringify(info));
}

convert ('Peter', 'Smith',

'Blond')