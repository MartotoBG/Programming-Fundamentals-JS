function solve(input) {
    let index = 0;
    let judges = Number(input[index++]);
    let presentation = "";
    let c = 0;
    let sum1 = 0;
    while (presentation !== 'Finish') {
        presentation = input[index++];
        let sum = 0;
        let sr = 0;        
        for (let i = 0; i < judges; i++) {
            let ocen = Number(input[index++]);
            sum += ocen;
            sr = sum / judges;
            
        }
        
        c++;
        sum1 += sr;
      
        console.log(`${presentation} - ${(sr).toFixed(2)}.`)
        presentation = input[index];
    }
    console.log(`Student's final assessment is ${(sum1/c).toFixed(2)}.`);
}
solve(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])