function solve(input) {
    let n = Number(input[0]);
    let k = 0;
    k++;
    while (k<=n){
        console.log(k);
        k= 2 * k + 1;
    }
    
}
solve (["3"])