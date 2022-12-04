function solve() {
    for (let i = 0; i < 24; i++) {
        for (let m = 0; m < 60; m++){
            if (m<10){
                console.log(`${i}:0${m}`);
            }
            else {
                console.log(`${i}:${m}`)
            }
        }
        }
    }