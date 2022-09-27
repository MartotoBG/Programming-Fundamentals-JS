function chessSize(number) {
    let black = `<span class="black"></span>`;
    let white = `<span class="white"></span>`;
    let repeat = 0;
    
    console.log(`<div class="chessboard">`);
    for (let i = 1; i<=number ; i++){
        console.log(`  <div>`);
        for (let j=1 ; j<=number; j++){
            if (j % 2 === 0 && repeat % 2 === 0){
            console.log(`    ${white}`);
            }
            else if (j % 2 === 0 && repeat % 2 === 1){
                console.log(`    ${black}`);
            }
            else if (j % 2 === 1 && repeat % 2 === 0){
                console.log(`    ${black}`);
            }
            else if (j % 2 === 1 && repeat % 2 === 1){
                console.log(`    ${white}`);
            }

        }   
        console.log(`  </div>`);
        repeat++;
     }
        console.log(`</div>`);
}

chessSize(3)