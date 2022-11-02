function findGeographicPoints (array) {
    for (let i = 0; i < array.length; i++){
        let currentTown = array[i].split(` | `);
    let town = {
        name: currentTown[0],
        latitude: Number(currentTown[1]),
        longtude: Number(currentTown[2]),
    }
    console.log(`{ town: '${town.name}', latitude: '${town.latitude.toFixed(2)}', longitude: '${town.longtude.toFixed(2)}' }`)
}
//{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
}

findGeographicPoints (['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])