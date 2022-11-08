function miner (array){
    const ores = {};
    const length = array.length;
    for (let i = 0 ; i <length; i+=2){
        const ore = array[i];
        const quantity = Number(array[i+1]);
        if(ores[ore]){
            ores[ore] += quantity;
        }
        else {
            ores[ore] = quantity;
        }
    }
    const entries = Object.entries(ores);
    for (const entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}

miner ([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])